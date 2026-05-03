import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function EditCompany() {
  const location = useLocation();
  const navigate = useNavigate();
  const company = location.state;
    const base_url=`http://farjana.intelsofts.com/Projects/core/api/`;


  const [form, setForm] = useState({
    id: company?.id || '',
    name: company?.name || '',
    mobile: company?.mobile || '',
    bin: company?.bin || '',
    email: company?.email || '',
    website: company?.website || '',
    city: company?.city || '',
    area: company?.area || '',
    street_address: company?.str || '',
    post_code: company?.post_code || '',
    inactive: company?.inactive || '',
    logo: null,
    logoPreview: company?.logo || '' // Store initial preview URL if any
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({
        ...prev,
        logo: file,
        logoPreview: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (let key in form) {
      if (key === 'logo' && form.logo instanceof File) {
        formData.append('logo', form.logo);
      } else if (key !== 'logoPreview') {
        formData.append(key, form[key]);
      }
    }

    try {
      const response = await fetch(`${base_url}/company/company/${form.id}`, {
        method: 'PUT',
        body: formData
      });

      if (!response.ok) throw new Error('Failed to update');

      alert('Company updated successfully');
      navigate('/company');
    } catch (error) {
      console.error(error);
      alert('Error updating company');
    }
  };

  return (
    <div className="container my-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Edit Company</h2>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">ID</label>
              <input
                type="text"
                className="form-control"
                name="id"
                value={form.id}
                readOnly
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Mobile</label>
              <input
                type="text"
                className="form-control"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">BIN</label>
              <input
                type="text"
                className="form-control"
                name="bin"
                value={form.bin}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Website</label>
              <input
                type="text"
                className="form-control"
                name="website"
                value={form.website}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                name="city"
                value={form.city}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Area</label>
              <input
                type="text"
                className="form-control"
                name="area"
                value={form.area}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Street Address</label>
              <input
                type="text"
                className="form-control"
                name="street_address"
                value={form.street_address}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Post Code</label>
              <input
                type="text"
                className="form-control"
                name="post_code"
                value={form.post_code}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Inactive</label>
              <input
                type="text"
                className="form-control"
                name="inactive"
                value={form.inactive}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Logo File</label>
              <input
                type="file"
                className="form-control"
                name="logo"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            {form.logoPreview && (
              <div className="col-12 text-center">
                <label className="form-label">Logo Preview</label>
                <br />
                <img
                  src={form.logoPreview}
                  alt="Company Logo"
                  className="img-thumbnail"
                  style={{ maxHeight: '100px' }}
                />
              </div>
            )}
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary px-4">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCompany;
