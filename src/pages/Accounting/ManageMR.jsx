import { useState,useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import Card from "../UI/Card";

function ManageMR(){  
    const[moneyreceipts,setMoneyReceipts]=useState([]);
    const navigate = useNavigate();

    const base_url=`http://farjana.intelsofts.com/Projects/core/api/`;

    useEffect(()=>{  
      fetchMoneyReceipts();      
    },[]);

    const fetchMoneyReceipts = async () => {
        try {
          const res = await fetch(`${base_url}/moneyreceipt`,{
            method:"GET",
            headers:{
               "Content-Type":"application/json",
               "Accept":"application/json"
            }
          });

          if (!res.ok) {
            throw new Error('Failed to fetch users');
          }

          const data = await res.json();
          setMoneyReceipts(data.money_receipts);

        } catch (err) {
          console.error('Error:', err.message);
        }
    };

    const deleteMoneyReceipt = async (id) => {
      try {
        const res = await fetch(`${base_url}/moneyreceipt/delete`,{
          method:"DELETE",
          headers:{
             "Content-Type":"application/json",
             "Accept":"application/json"
          },
          body:JSON.stringify({id:id})
        });

        if (!res.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await res.json();
        console.log(data);

      } catch (err) {
        console.error('Error:', err.message);
      }
  };

    //Events

    const handleCreate=()=>{
      
   }

    const handleView=(moneyreceipt)=>{
       console.log(moneyreceipt)
    }

    const handleEdit=(moneyreceipt)=>{
      console.log(moneyreceipt)
   }

   const handleDelete=(id)=>{
    if(confirm("Are you sure?")){
      deleteMoneyReceipt(id);
    }    
   } 
   
    return(
        <>
       
        <Card title="MoneyReceipts">
        <NavLink className="btn btn-primary" to="/moneyreceipt/create">New</NavLink>
      
        <table className="table">
        <thead className="table-light">
        <tr>
            <th>Id</th>
            <th>Create At</th>
            <th>Updated At</th>
            <th>Customer Id</th>
            <th>Remak</th>
            <th>Receipt Total</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            {moneyreceipts.map(moneyreceipt => (
                <tr key={moneyreceipt.id}>
                    <td>{moneyreceipt.id}</td>
                    <td>{moneyreceipt.created_at}</td>
                    <td>{moneyreceipt.updated_at}</td>
                    <td>{moneyreceipt.customer_id}</td>
                    
                    <td>{moneyreceipt.remark}</td>
                    <td>{moneyreceipt.receipt_total}</td>
                    <td>{moneyreceipt.action}</td>
                    <td className="btn-group">
                        <a onClick={() => navigate('/moneyreceipt/detail', { state: moneyreceipt })} className="btn btn-success">View</a>
                        <a onClick={() => navigate("/moneyreceipt/edit",{state: moneyreceipt})}  className="btn btn-primary">Edit</a>
                        <a onClick={() => handleDelete(moneyreceipt.id)} className="btn btn-danger">Delete</a>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        </Card>
        </>
    )
}

export default ManageMR;