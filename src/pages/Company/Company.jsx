import { useState,useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import Card from "../UI/Card";

function Company(){  
    const[company,setCompany]=useState([]);
    const navigate = useNavigate();

    const base_url=`http://farjana.intelsofts.com/Projects/core/api/`;


    useEffect(()=>{  
      fetchCompany();      
    },[company]);

    const fetchCompany = async () => {
        try {
          const res = await fetch(`${base_url}/company/company`,{
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
          setCompany(data.company);

        } catch (err) {
          console.error('Error:', err.message);
        }
    };

    const deleteCompany = async (id) => {
      try {
        const res = await fetch(`${base_url}/company/delete`,{
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

    const handleView=(company)=>{
       console.log(company)
    }

    const handleEdit=(company)=>{
      console.log(company)
   }

   const handleDelete=(id)=>{
    if(confirm("Are you sure?")){
      deleteCompany(id);
    }    
   } 
   
    return(
        <>
       
        <Card title="Company">
        <NavLink className="btn btn-primary" to="/company/create">New</NavLink>
      
        <table className="table">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Logo</th>
            {/* <th>Mobile</th>
            <th>Bin</th> */}
            <th>Email</th>
            <th>Website</th>
            <th>City</th>
            <th>Area</th>
            <th>Street Address</th>
            <th>Post Code</th>
            <th>Inactive</th>
           
          </tr>
            {company.map(company => (
                <tr key={company.id}>
                    <td>{company.id}</td>
                    <td>{company.name}</td>
                    <td><img src={`http://farjana.intelsofts.com/Projects/core/img/${company.logo}`} width="100" /></td>
                    {/* <td>{company.mobile}</td>
                    <td>{company.bin}</td> */}
                    <td>{company.email}</td>
                    <td>{company.website}</td>
                    <td>{company.city}</td>
                    <td>{company.area}</td>
                    <td>{company.street_address}</td>
                    <td>{company.post_code}</td>
                    <td>{company.inactive}</td>
                   
                    <td className="btn-group">
                        <a onClick={() => navigate('/company/detail', { state: company })} className="btn btn-success text-success">View</a>
                        <a onClick={() => navigate("/company/edit",{state:company})}  className="btn btn-primary text-primary">Edit</a>
                        <a onClick={() => handleDelete(company.id)} className="btn btn-danger text-danger">Delete</a>
                    </td>
                </tr>
            ))}
        </table>
        </Card>
        </>
    )
}

export default Company;