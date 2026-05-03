import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Card from "../UI/Card";

function DetailInvoice() {
  const location = useLocation();
  const invoice = location.state;

  return (
    <>
      <Card title="Invoice Details">
        <NavLink className="btn btn-success mb-3" to="/invoice">Back</NavLink>

        <div><strong>ID:</strong> {invoice?.id}</div>
        <div><strong>Customer ID:</strong> {invoice?.customer_id}</div>
        <div><strong>Created At:</strong> {invoice?.created_at}</div>
        <div><strong>Remark:</strong> {invoice?.remark}</div>
        <div><strong>Payment Term:</strong> {invoice?.payment_term}</div>
        <div><strong>Updated At:</strong> {invoice?.updated_at}</div>
        <div><strong>Invoice Total:</strong> {invoice?.invoice_total}</div>
        <div><strong>Paid Total:</strong> {invoice?.paid_total}</div>
        <div><strong>Previous Due:</strong> {invoice?.previous_due}</div>
      </Card>
    </>
  );
}

export default DetailInvoice;
