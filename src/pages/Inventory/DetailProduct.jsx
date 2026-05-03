import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Card from "../UI/Card";

function DetailProduct(){

    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state;

    

    // const [form, setForm] = useState({
    //     id: product?.id || '',
    //     name: product?.name || ''
    //   });

    return(
        <>
        <Card title="Product Details">
         <NavLink className="btn btn-success" to="/product">Back</NavLink>
        <div>
            ID: {product.id}
        </div>
        <div>
            Name: {product.name}
        </div>
        <div>
            <img src={`http://farjana.intelsofts.com/Projects/core/img/${product.photo}`} width="150" />
        </div>
        </Card>
        </>
    )
};

export default DetailProduct;