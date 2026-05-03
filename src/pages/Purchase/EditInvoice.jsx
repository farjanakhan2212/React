import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Card from "../UI/Card";

function EditProduct(){
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state;

    const base_url=`http://farjana.intelsofts.com/Projects/core/api/`;
  
    const [form, setForm] = useState({
      id: product?.id || '',
      name: product?.name || ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();  
        
        console.log(form);
        // await fetch(`https://yourapi.com/users/${user.id}`, {
        //   method: 'PUT',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(form)
        // });
        // navigate('/');
      };

    return(
        <>
          <form onSubmit={handleSubmit}>
        <h3>Edit Product</h3>
        <input
            value={form.id}
            onChange={e => setForm({ ...form, id: e.target.value })}
        />
        <input
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <button type="submit">Update</button>
        </form>
        </>
    );
}

export default EditProduct;