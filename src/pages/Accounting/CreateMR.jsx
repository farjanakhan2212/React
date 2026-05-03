import { useState, useEffect, useRef } from "react";

function MoneyReceipt(props) {
  const [items, setItem] = useState([]);
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [productId, setProductId] = useState(0);
  const [productPrice, setPrice] = useState(0);
  const [productUnit, setUnit] = useState(1);
  const unit = useRef(null);

  useEffect(() => {
    unit.current.focus();
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`http://farjana.intelsofts.com/Projects/core/api/product`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to fetch products");

      const data = await res.json();
      setItem(data.products);
    } catch (err) {
      console.error("Error:", err.message);
    }
  };

  const handleAddItem = () => {
    const selectedOption = document.querySelector("select").selectedOptions[0];
    const product_name = selectedOption.text;
    const product_value = selectedOption.value;

    const qty = parseInt(productUnit);
    const totalLine = productPrice * qty;

    const json = {
      id: cart.length + 1,
      desc: product_name,
      product_id: product_value,
      qty: qty,
      price: parseFloat(productPrice),
      lineTotal: totalLine,
    };

    setCart([...cart, json]);
    setSubTotal(subTotal + totalLine);
  };

  const handleGetPrice = (e) => {
    const selected = items.find((item) => item.id == e.target.value);
    setPrice(selected.offer_price);
    setUnit(1);
    setProductId(e.target);
  };

  const handleQuantityChange = (id, action) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newQty = action === "increase" ? item.qty + 1 : item.qty - 1;
        const newLineTotal = item.price * newQty;
        setSubTotal(subTotal - item.lineTotal + newLineTotal);

        return {
          ...item,
          qty: newQty,
          lineTotal: newLineTotal,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDelete = (id) => {
    const item = cart.find((i) => i.id === id);
    setSubTotal(subTotal - item.lineTotal);
    setCart(cart.filter((i) => i.id !== id));
  };

  const handleSave = () => {
    alert("Money receipt generated!");
  };

  const vat = subTotal * 0.03;
  const total = subTotal + vat;

  return (
    <>
      <h1>Money Receipt</h1>
      <p>{props.desc}</p>

      <div className="card mb-3">
        <div className="card-body">
          <div className="row align-items-center text-center mb-3">
            <div className="col-sm-6 text-sm-start">
              <img src="assets/img/icons/spot-illustrations/logo.png" width={100} alt="Logo" />
            </div>
            <div className="col text-sm-end mt-3 mt-sm-0">
              <h2 className="mb-3">Money Receipt</h2>
            </div>
            <div className="col-12">
              <hr />
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col">
              <h6 className="text-500">Received from</h6>
              <h5>
                <select id="customer_id" className="form-select">
                  <option value="1">Rahim</option>
                  <option value="2">Karim</option>
                  <option value="3">Jahid</option>
                </select>
              </h5>
              <p className="fs--1">
                1954 Bloor Street West<br />
                Toronto ON, M6P 3K9<br />
                Canada
              </p>
              <p className="fs--1">
                <a href="mailto:example@gmail.com">example@gmail.com</a><br />
                <a href="tel:444466667777">+4444-6666-7777</a>
              </p>
            </div>
            <div className="col-sm-auto ms-auto">
              <table className="table table-sm table-borderless fs--1 text-end">
                <tbody>
                  <tr>
                    <th>Receipt No:</th>
                    <td>MR-{Math.floor(Math.random() * 10000)}</td>
                  </tr>
                  <tr>
                    <th>Date:</th>
                    <td>{new Date().toLocaleDateString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="table-responsive scrollbar mt-4 fs--1">
            <table className="table table-striped border-bottom">
              <thead className="light">
                <tr className="bg-primary text-white">
                  <th>Products</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-end">Rate</th>
                  <th className="text-end">Amount</th>
                  <th />
                </tr>
                <tr className="text-white">
                  <th>
                    <select onChange={handleGetPrice} className="form-select">
                      <option value="0">Select</option>
                      {items.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </th>
                  <th className="text-center">
                    <input
                      ref={unit}
                      type="number"
                      value={productUnit}
                      onChange={(e) => setUnit(e.target.value)}
                      className="form-control text-center"
                      style={{ width: "100%" }}
                      min={1}
                    />
                  </th>
                  <th className="text-end">
                    <input
                      type="text"
                      value={productPrice}
                      onChange={(e) => setPrice(e.target.value)}
                      className="form-control text-end"
                      style={{ width: "100%" }}
                    />
                  </th>
                  <th />
                  <th className="text-end">
                    <button
                      className="btn btn-success w-100"
                      onClick={handleAddItem}
                    >
                      +
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
  {cart.map((item) => (
    <tr key={item.id}>
      <td>{item.desc}</td>
      <td className="text-center">{item.qty}</td>
      <td className="text-end">{item.price.toFixed(2)}</td>
      <td className="text-end">{item.lineTotal.toFixed(2)}</td>
      <td className="text-end">
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-sm btn-outline-secondary me-1"
            onClick={() => handleQuantityChange(item.id, "decrease")}
            disabled={item.qty <= 1}
          >
            -
          </button>
          <button
            className="btn btn-sm btn-outline-secondary me-1"
            onClick={() => handleQuantityChange(item.id, "increase")}
          >
            +
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  ))}
</tbody>

            </table>
          </div>

          <div className="row justify-content-end">
            <div className="col-auto">
              <table className="table table-sm table-borderless fs--1 text-end">
                <tbody>
                  <tr>
                    <th className="text-900">Subtotal:</th>
                    <td>{subTotal.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <th className="text-900">Tax 3%:</th>
                    <td>{vat.toFixed(2)}</td>
                  </tr>
                  <tr className="border-top">
                    <th className="text-900">Total Received:</th>
                    <td>{total.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <button className="btn btn-primary" onClick={handleSave}>
                        Generate Receipt
                      </button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="card-footer bg-light">
          <p className="fs--1 mb-0">
            <strong>Note:</strong> Thank you for your payment. Please keep this
            receipt for your records.
          </p>
        </div>
      </div>
    </>
  );
}

export default MoneyReceipt;
