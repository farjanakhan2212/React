import React, { useState } from 'react';

const CreateCompany = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    bin: '',
    email: '',
    website: '',
    city: '',
    area: '',
    street_address: '',
    post_code: '',
    inactive: false,
    logo: null,
  });

  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data for submission
    const submissionData = new FormData();
    Object.keys(formData).forEach((key) => {
      submissionData.append(key, formData[key]);
    });

    try {
      const response = await fetch('http://farjana.intelsofts.com/Projects/core/api/company/company', {
        method: 'POST',
        body: submissionData,
        // Note: No need to set Content-Type to multipart/form-data when using FormData
      });

      if (!response.ok) {
        throw new Error('Failed to save company');
      }

      const result = await response.json();
      console.log('Company saved:', result);
      alert('Company saved successfully!');
      // Optionally reset the form:
      setFormData({
        name: '',
        mobile: '',
        bin: '',
        email: '',
        website: '',
        city: '',
        area: '',
        street_address: '',
        post_code: '',
        inactive: false,
        logo: null,
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to save company');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h5>Create Company</h5>
              <a href="/company" className="btn btn-success float-end">Manage Company</a>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                {[
                  { label: 'Name', name: 'name', type: 'text' },
                  { label: 'Mobile', name: 'mobile', type: 'text' },
                  { label: 'Bin', name: 'bin', type: 'text' },
                  { label: 'Email', name: 'email', type: 'text' },
                  { label: 'Website', name: 'website', type: 'text' },
                  { label: 'City', name: 'city', type: 'text' },
                  { label: 'Area', name: 'area', type: 'text' },
                  { label: 'Street Address', name: 'street_address', type: 'text' },
                  { label: 'Post Code', name: 'post_code', type: 'text' },
                ].map((field) => (
                  <div className="mb-3" key={field.name}>
                    <label className="form-label">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                ))}

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    name="inactive"
                    checked={formData.inactive}
                    onChange={handleChange}
                    className="form-check-input"
                    id="inactive"
                  />
                  <label className="form-check-label" htmlFor="inactive">
                    Inactive
                  </label>
                </div>

                <div className="mb-3">
                  <label className="form-label">Logo</label>
                  <input
                    type="file"
                    name="logo"
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <button type="submit" className="btn btn-primary offset-2">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCompany;
