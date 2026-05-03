import { useState,useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import Card from "../UI/Card";

function Products(){  
    const[products,setProducts]=useState([]);
    const navigate = useNavigate();

    const base_url=`http://farjana.intelsofts.com/Projects/core/api/`;

    useEffect(()=>{  
      fetchProducts();      
    },[products]);

    const fetchProducts = async () => {
        try {
          const res = await fetch(`${base_url}/product`,{
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
          setProducts(data.products);

        } catch (err) {
          console.error('Error:', err.message);
        }
    };

    const deleteProduct = async (id) => {
      try {
        const res = await fetch(`${base_url}/product/delete`,{
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

    const handleView=(product)=>{
       console.log(product)
    }

    const handleEdit=(product)=>{
      console.log(product)
   }

   const handleDelete=(id)=>{
    if(confirm("Are you sure?")){
      deleteProduct(id);
    }    
   } 
   
    return(
        <>
       
        <Card title="Products">
        <NavLink className="btn btn-primary" to="/product/create">New</NavLink>
      
        <table className="table">
        <tr>
            <th>Id</th>
            <th>Photo</th>
            <th>Barcode</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
            {products.map(product => (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td><img src={`http://farjana.intelsofts.com/Projects/core/img/${product.photo}`} width="100" /></td>
                    <td>{product.barcode}</td>
                    <td>{product.name}</td>
                    <td>{product.offer_price}</td>
                    <td className="btn-group">
                        <a onClick={() => navigate('/product/detail', { state: product })} className="btn btn-success text-success">View</a>
                        <a onClick={() => navigate("/product/edit",{state:product})}  className="btn btn-primary text-primary">Edit</a>
                        <a onClick={() => handleDelete(product.id)} className="btn btn-danger text-danger">Delete</a>
                    </td>
                </tr>
            ))}
        </table>
        </Card>
        </>
    )
}

export default Products;