import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function EditProduct() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;
  const base_url = `http://farjana.intelsofts.com/Projects/core/api`;

  const [form, setForm] = useState({
    id: product?.id || '',
    name: product?.name || '',
    offer_price: product?.offer_price || '',
    manufacturer_id: product?.manufacturer_id || '',
    regular_price: product?.regular_price || '',
    description: product?.description || '',
    photo: null,
    photoPreview: product?.photo || '',
    product_category_id: product?.product_category_id || '',
    product_section_id: product?.product_section_id || '',
    is_featured: product?.is_featured || '',
    star: product?.star || '',
    is_brand: product?.is_brand || '',
    offer_discount: product?.offer_discount || '',
    uom_id: product?.uom_id || '',
    weight: product?.weight || '',
    barcode: product?.barcode || '',
    created_at: product?.created_at || '',
    updated_at: product?.updated_at || '',
    product_type_id: product?.product_type_id || '',
    product_unit_id: product?.product_unit_id || '',
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
        photo: file,
        photoPreview: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let key in form) {
      if (key === 'photo' && form.photo instanceof File) {
        formData.append('photo', form.photo);
      } else if (key !== 'photoPreview') {
        formData.append(key, form[key]);
      }
    }

    try {
      const response = await fetch(`${base_url}/product/product/${form.id}`, {
        method: 'PUT',
        body: formData
      });

      if (!response.ok) throw new Error('Failed to update product');

      alert('Product updated successfully');
      navigate('/product');
    } catch (error) {
      console.error(error);
      alert('Error updating product');
    }
  };

  return (
    <div className="container my-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {[
              'id', 'name', 'offer_price', 'manufacturer_id', 'regular_price',
              'description', 'product_category_id', 'product_section_id',
              'is_featured', 'star', 'is_brand', 'offer_discount',
              'uom_id', 'weight', 'barcode', 'created_at', 'updated_at',
              'product_type_id', 'product_unit_id'
            ].map((field, index) => (
              <div className="col-md-6" key={index}>
                <label className="form-label text-capitalize">{field.replace(/_/g, ' ')}</label>
                <input
                  type="text"
                  className="form-control"
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  readOnly={field === 'id'}
                />
              </div>
            ))}

            <div className="col-md-6">
              <label className="form-label">Photo</label>
              <input
                type="file"
                className="form-control"
                name="photo"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            {form.photoPreview && (
              <div className="col-12 text-center">
                <label className="form-label">Photo Preview</label>
                <br />
                <img
                  src={form.photoPreview}
                  alt="Product Preview"
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

export default EditProduct;
