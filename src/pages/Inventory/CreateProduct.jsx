import React, { useState, useEffect } from 'react';

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    offer_price: '',
    manufacturer_id: '',
    regular_price: '',
    description: '',
    photo: null,
    product_category_id: '',
    product_section_id: '',
    is_featured: false,
    star: '',
    is_brand: false,
    offer_discount: '',
    uom_id: '',
    weight: '',
    barcode: '',
    product_type_id: '',
    product_unit_id: '',
  });

  const [dropdowns, setDropdowns] = useState({
    manufacturers: [],
    product_categories: [],
    product_sections: [],
    uoms: [],
    product_types: [],
    product_units: [],
  });

 useEffect(() => {
  const fetchData = async () => {
    try {
      const [
        manufacturerRes,
        productCategoryRes,
        productSectionRes,
        uomRes,
        productTypeRes,
        productUnitRes,
      ] = await Promise.all([
        fetch('http://farjana.intelsofts.com/Projects/core/api/manufacturer').then(res => res.json()),
        fetch('http://farjana.intelsofts.com/Projects/core/api/product_category').then(res => res.json()),
        fetch('http://farjana.intelsofts.com/Projects/core/api/product_section').then(res => res.json()),
        fetch('http://farjana.intelsofts.com/Projects/core/api/uom').then(res => res.json()),
        fetch('http://farjana.intelsofts.com/Projects/core/api/product_type').then(res => res.json()),
        fetch('http://farjana.intelsofts.com/Projects/core/api/product_unit').then(res => res.json()),
      ]);

      setDropdowns({
        manufacturers: manufacturerRes.manufacturers || [],
        product_categories: productCategoryRes.product_categories || [],
        product_sections: productSectionRes.product_sections || [],
        uoms: uomRes.uoms || [],
        product_types: productTypeRes.product_types || [],
        product_units: productUnitRes.product_units || [],
      });
    } catch (error) {
      console.error('Error fetching dropdown data:', error);
    }
  };

  fetchData();
}, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  console.log(dropdowns.manufacturers);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   // Handle API submit with FormData if needed
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();

    // Append each key/value to FormData
    Object.entries(formData).forEach(([key, value]) => {
      if (typeof value === 'boolean') {
        form.append(key, value ? '1' : '0'); // convert boolean to "1" or "0"
      } else {
        form.append(key, value ?? '');
      }
    });

    try {
      const response = await fetch('http://farjana.intelsofts.com/Projects/core/api/product', {
        method: 'POST',
        body: form,
      });

      if (!response.ok) {
        throw new Error('Failed to save product');
      }

      const result = await response.json();
      alert('Product saved successfully!');
      console.log('API Response:', result);
    } catch (err) {
      console.error('Submit error:', err.message);
      alert('Failed to save product. See console for details.');
    }
  };



  const renderSelect = (name, label, options) => (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="form-select"
      >
        <option value="">Select {label}</option>
        {options.map(opt => (
          <option key={opt.id} value={opt.id}>{opt.name}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h5>Create Product</h5>
              <a href="/product" className="btn btn-success float-end">Manage Product</a>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="hidden" name="id" value={formData.id} />

                {/* Text Inputs */}
                {[
                  ['Name', 'name'],
                  ['Offer Price', 'offer_price'],
                  ['Regular Price', 'regular_price'],
                  ['Star', 'star'],
                  ['Offer Discount', 'offer_discount'],
                  ['Weight', 'weight'],
                  ['Barcode', 'barcode']
                ].map(([label, name]) => (
                  <div className="mb-3" key={name}>
                    <label className="form-label">{label}</label>
                    <input
                      type="text"
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                ))}

                {/* Textarea */}
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                {/* File Upload */}
                <div className="mb-3">
                  <label className="form-label">Photo</label>
                  <input
                    type="file"
                    name="photo"
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                {/* Dropdowns */}
                {renderSelect('manufacturer_id', 'Manufacturer', dropdowns.manufacturers)}
                {renderSelect('product_category_id', 'Product Category', dropdowns.product_categories)}
                {renderSelect('product_section_id', 'Product Section', dropdowns.product_sections)}
                {renderSelect('uom_id', 'Uom', dropdowns.uoms)}
                {renderSelect('product_type_id', 'Product Type', dropdowns.product_types)}
                {renderSelect('product_unit_id', 'Product Unit', dropdowns.product_units)}

                {/* Checkboxes */}
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    name="is_featured"
                    checked={formData.is_featured}
                    onChange={handleChange}
                    className="form-check-input"
                    id="is_featured"
                  />
                  <label className="form-check-label" htmlFor="is_featured">Is Featured</label>
                </div>

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    name="is_brand"
                    checked={formData.is_brand}
                    onChange={handleChange}
                    className="form-check-input"
                    id="is_brand"
                  />
                  <label className="form-check-label" htmlFor="is_brand">Is Brand</label>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary offset-2">Save</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
