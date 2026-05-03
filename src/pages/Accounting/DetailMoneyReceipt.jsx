import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import Card from "../UI/Card";

function DetailMoneyReceipt() {
  const location = useLocation();
  const receipt = location.state;

  return (
    <>
      <Card title="Money Receipt Details">
        <NavLink to="/moneyreceipt" className="btn btn-success mb-3">
          Back
        </NavLink>

        {receipt ? (
          <>
            <table className="table table-bordered">
              <thead className="bg-light">
                <tr>
                  <th>ID</th>
                  <th>Receipt ID</th>
                  <th>Product ID</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>VAT</th>
                  <th>Discount</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {receipt.items?.length > 0 ? (
                  receipt.items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.money_receipt_id}</td>
                      <td>{item.product_id}</td>
                      <td>{parseFloat(item.price).toFixed(2)}</td>
                      <td>{item.qty}</td>
                      <td>{parseFloat(item.vat || 0).toFixed(2)}</td>
                      <td>{parseFloat(item.discount || 0).toFixed(2)}</td>
                      <td>
                        {(
                          item.price * item.qty +
                          (parseFloat(item.vat || 0) - parseFloat(item.discount || 0))
                        ).toFixed(2)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center">
                      No items found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            <div className="text-end mt-4">
              <h5>
                Subtotal:{" "}
                {receipt.items
                  ?.reduce((sum, item) => sum + item.price * item.qty, 0)
                  .toFixed(2)}
              </h5>
              <h6>
                VAT:{" "}
                {receipt.items
                  ?.reduce((sum, item) => sum + parseFloat(item.vat || 0), 0)
                  .toFixed(2)}
              </h6>
              <h6>
                Discount:{" "}
                {receipt.items
                  ?.reduce((sum, item) => sum + parseFloat(item.discount || 0), 0)
                  .toFixed(2)}
              </h6>
              <h4>
                Grand Total:{" "}
                {receipt.items
                  ?.reduce(
                    (sum, item) =>
                      sum +
                      item.price * item.qty +
                      (parseFloat(item.vat || 0) - parseFloat(item.discount || 0)),
                    0
                  )
                  .toFixed(2)}
              </h4>
            </div>
          </>
        ) : (
          <p>No receipt data available.</p>
        )}
      </Card>
    </>
  );
}

export default DetailMoneyReceipt;
