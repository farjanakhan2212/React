import React, { useState } from 'react';

const InvoiceApp = () => {
    const [cart, setCart] = useState([]);
    const [unit, setUnit] = useState(1);
    const [price, setPrice] = useState("");
    const [productId, setProductId] = useState("");
    const [date] = useState(new Date().toLocaleDateString());
    const [customerId, setCustomerId] = useState("");

    const handleAddItem = () => {
        const product_name = "Sample Product"; // Adjust as per your data source
        const vat = 0;
        const discount = 0;
        const lineTotal = unit * price - discount + vat;

        const newItem = {
            id: cart.length + 1,
            desc: product_name,
            product_id: productId,
            qty: unit,
            price: price,
            discount: discount,
            vat: vat,
            lineTotal: lineTotal
        };

        setCart([...cart, newItem]);
    };

    const handleDeleteItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const printCart = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.lineTotal;
        });
        return total;
    };

    const handleCreateInvoice = async () => {
        if (window.confirm("Are you sure?")) {
            const total = printCart();
            const jsonData = {
                created_at: date,
                updated_at: date,
                customer_id: customerId,
                remark: "Na",
                payment_term: "CASH",
                invoice_total: total,
                paid_total: total,
                previous_due: 0,
                items: cart
            };

            try {
                const response = await fetch('http://farjana.intelsofts.com/Projects/core/api/invoice', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(jsonData)
                });

                if (!response.ok) {
                    alert("Server Error: " + response.status);
                    return;
                }

                const json = await response.json();
                console.log("Invoice Saved:", json);
                alert("Invoice Created Successfully!");
                setCart([]);
            } catch (error) {
                console.error("Fetch Error:", error);
                alert("Something went wrong. Check console.");
            }
        }
    };

    return (
        <div style={{ fontFamily: 'Arial', backgroundColor: '#e3f2fd', padding: '20px' }}>
            <div className="card" style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '30px', margin: '20px' }}>
                {/* Card Header */}
                <div className="card-header" style={{ backgroundColor: '#40E0D0', padding: '15px', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="company-logo">
                            <img src="assets/img/icons/spot-illustrations/logo.png" alt="Company Logo" style={{ width: '100px' }} />
                        </div>
                        <div className="company-info" style={{ textAlign: 'right' }}>
                            <h2 style={{ fontSize: '24px', color: '#fff', fontWeight: 'bold' }}>Invoice</h2>
                            <h5 style={{ fontSize: '18px', color: '#fff', marginTop: '-10px' }}>FreshShop</h5>
                            <p style={{ fontSize: '14px', color: '#fff', lineHeight: '1.5' }}>
                                Street Address<br />
                                Area, City
                            </p>
                        </div>
                    </div>
                </div>

                {/* Customer Information Section */}
                <div className="customer-info" style={{ fontSize: '14px', color: '#333' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: 1 }}>
                            <h6 style={{ fontWeight: 'bold' }}>Invoice To:</h6>
                            <h5>
                                <select
                                    onChange={(e) => setCustomerId(e.target.value)}
                                    style={{ fontSize: '14px', padding: '6px 10px' }}>
                                    <option value="">Select Customer</option>
                                    {/* Replace with actual customer options */}
                                    <option value="1">Customer 1</option>
                                    <option value="2">Customer 2</option>
                                </select>
                            </h5>
                            <p style={{ fontSize: '12px', color: '#777' }}>
                                1954 Bloor Street West<br />
                                Toronto ON, M6P 3K9<br />
                                Canada
                            </p>
                            <div className="contact-info">
                                <p><a href="mailto:example@gmail.com" style={{ color: '#3498db', textDecoration: 'none' }}>example@gmail.com</a></p>
                                <p><a href="tel:444466667777" style={{ color: '#3498db', textDecoration: 'none' }}>+4444-6666-7777</a></p>
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <table className="invoice-table" style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse', backgroundColor: '#f9f9f9' }}>
                                <tbody>
                                    <tr>
                                        <th style={{ padding: '12px 15px', textAlign: 'left', backgroundColor: '#40E0D0', color: '#fff' }}>Invoice No:</th>
                                        <td style={{ padding: '12px 15px', textAlign: 'left', fontSize: '14px', color: '#555' }}>001</td>
                                    </tr>
                                    <tr>
                                        <th style={{ padding: '12px 15px', textAlign: 'left', backgroundColor: '#40E0D0', color: '#fff' }}>Invoice Date:</th>
                                        <td style={{ padding: '12px 15px', textAlign: 'left', fontSize: '14px', color: '#555' }}>{date}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Product Table Section */}
                <div className="table-responsive">
                    <table className="invoice-table" style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse', backgroundColor: '#f9f9f9' }}>
                        <thead>
                            <tr>
                                <th style={{ padding: '12px 15px', textAlign: 'left' }}>Services / Items</th>
                                <th className="text-center" style={{ padding: '12px 15px', textAlign: 'center' }}>Quantity</th>
                                <th className="text-end" style={{ padding: '12px 15px', textAlign: 'right' }}>Rate</th>
                                <th className="text-end" style={{ padding: '12px 15px', textAlign: 'right' }}>Amount</th>
                                <th style={{ padding: '12px 15px' }}></th>
                            </tr>
                            <tr>
                                <th>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Product Name"
                                        value={productId}
                                        onChange={(e) => setProductId(e.target.value)}
                                        style={{ padding: '6px 10px' }}
                                    />
                                </th>
                                <th className="text-center">
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={unit}
                                        onChange={(e) => setUnit(e.target.value)}
                                        style={{ padding: '6px 10px' }}
                                    />
                                </th>
                                <th className="text-end">
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        style={{ padding: '6px 10px' }}
                                    />
                                </th>
                                <th className="text-end"></th>
                                <th>
                                    <button
                                        className="btn-add"
                                        onClick={handleAddItem}
                                        style={{
                                            backgroundColor: '#2ecc71',
                                            color: '#fff',
                                            padding: '8px 12px',
                                            borderRadius: '4px',
                                            width: '100%',
                                            fontWeight: 'bold',
                                            border: 'none',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        +
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td style={{ padding: '12px 15px' }}>
                                        <h6 className="mb-0">{item.desc}</h6>
                                        <p className="mb-0 small text-muted">#{item.id}</p>
                                    </td>
                                    <td className="text-center" style={{ padding: '12px 15px' }}>
                                        {item.qty}
                                    </td>
                                    <td className="text-end" style={{ padding: '12px 15px' }}>${parseFloat(item.price).toFixed(2)}</td>
                                    <td className="text-end" style={{ padding: '12px 15px' }}>${parseFloat(item.lineTotal).toFixed(2)}</td>
                                    <td style={{ padding: '12px 15px' }}>
                                        <button
                                            className="btn-delete"
                                            onClick={() => handleDeleteItem(item.id)}
                                            style={{
                                                backgroundColor: '#e74c3c',
                                                color: '#fff',
                                                padding: '6px 10px',
                                                borderRadius: '50%',
                                                cursor: 'pointer',
                                                border: 'none'
                                            }}
                                        >
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Summary & Total Section */}
                <div className="summary-table">
                    <table style={{ width: '100%', marginTop: '30px', textAlign: 'right' }}>
                        <tr>
                            <th style={{ padding: '8px 15px', fontSize: '16px', color: '#333' }}>Subtotal:</th>
                            <td style={{ padding: '8px 15px', fontSize: '16px', color: '#333' }}>${printCart()}</td>
                        </tr>
                        <tr>
                            <th style={{ padding: '8px 15px', fontSize: '16px', color: '#333' }}>Tax (3%):</th>
                            <td style={{ padding: '8px 15px', fontSize: '16px', color: '#333' }}>${(printCart() * 0.03).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <th style={{ padding: '8px 15px', fontSize: '16px', color: '#333' }}>Total:</th>
                            <td className="total" style={{ padding: '8px 15px', fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                                ${printCart().toFixed(2)}
                            </td>
                        </tr>
                        <tr>
                            <th style={{ padding: '8px 15px', fontSize: '16px', color: '#e74c3c' }}>Amount Due:</th>
                            <td
                                className="due"
                                style={{ padding: '8px 15px', fontSize: '18px', color: '#e74c3c', fontWeight: 'bold' }}
                            >
                                ${printCart().toFixed(2)}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" style={{ padding: '8px 15px' }}>
                                <button
                                    className="payment-button"
                                    onClick={handleCreateInvoice}
                                    style={{
                                        backgroundColor: '#40E0D0',
                                        color: 'white',
                                        padding: '10px 20px',
                                        borderRadius: '5px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontWeight: 'bold',
                                        width: '100%'
                                    }}
                                >
                                    Create Invoice
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>

                {/* Footer Notes */}
                <div className="footer-notes" style={{ fontSize: '12px', color: '#777', marginTop: '20px' }}>
                    <p><strong>Notes:</strong> Thank you for choosing Grand Horizon Hotel. If you have any questions or need assistance, feel free to reach out to us.</p>
                </div>
            </div>
        </div>
    );
};

export default InvoiceApp;
