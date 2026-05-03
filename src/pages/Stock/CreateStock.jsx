import React, { useState } from 'react';

const CreateStock = () => {
  const [formData, setFormData] = useState({
    product_id: '',
    qty: '',
    transaction_type_id: '',
    remark: '',
    created_at: '',
    warehouse_id: '',
    updated_at: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://farjana.intelsofts.com/Projects/core/api/stock/stock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to save stock');
      }

      const result = await response.json();
      console.log('Stock saved:', result);
      alert('Stock saved successfully!');

      // Optionally reset the form
      setFormData({
        product_id: '',
        qty: '',
        transaction_type_id: '',
        remark: '',
        created_at: '',
        warehouse_id: '',
        updated_at: ''
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to save stock');
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h5>Create Stock</h5>
              <a href="/stock" className="btn btn-success float-end">Manage Stock</a>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {[ 
                  { label: 'Product ID', name: 'product_id', type: 'text' },
                  { label: 'Quantity', name: 'qty', type: 'number' },
                  { label: 'Transaction Type ID', name: 'transaction_type_id', type: 'text' },
                  { label: 'Remark', name: 'remark', type: 'text' },
                  { label: 'Created At', name: 'created_at', type: 'datetime-local' },
                  { label: 'Warehouse ID', name: 'warehouse_id', type: 'text' },
                  { label: 'Updated At', name: 'updated_at', type: 'datetime-local' }
                ].map((field) => (
                  <div className="mb-3" key={field.name}>
                    <label className="form-label">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                ))}

                <button type="submit" className="btn btn-primary offset-2">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStock;
