import React from 'react';

function ConfirmCustomer({ id, customerDetails, onDelete }) {
  const handleDelete = (e) => {
    e.preventDefault();
    // Trigger the delete function passed as a prop or define it here
    onDelete(id);
  };

  return (
    <div className="page">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              Confirm Customer
            </div>
            <div className="card-body">
              <form onDelete={handleDelete}>
                <p>Are you sure?</p>
                <div className="customer-details">
                  {/* Replace this with actual detail rendering logic */}
                  <pre>{JSON.stringify(customerDetails, null, 2)}</pre>
                </div>
                <input type="hidden" name="id" value={id} />
                <input
                  type="submit"
                  name="delete"
                  className="btn btn-danger"
                  value="Delete"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmCustomer;
