import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Card from "../UI/Card";

function DetailCustomer(){

    const location = useLocation();
    const navigate = useNavigate();
    const customer = location.state;

    // const [form, setForm] = useState({
    //     id: product?.id || '',
    //     name: product?.name || ''
    //   });

    return(
        <>
        <Card title="Customer Details">
         <NavLink className="btn btn-success" to="/customer">Back</NavLink>
        <div>
            ID: {customer.id}
        </div>
        <div>
            Name: {customer.name}
        </div>
        <div>
            <img src={`http://farjana.intelsofts.com/Projects/core/img/${customer.photo}`} width="300" />
        </div>
        </Card>
        </>
    )
};

export default DetailCustomer;