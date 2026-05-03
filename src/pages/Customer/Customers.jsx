import { useState, useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import Card from "../UI/Card";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  const base_url = `http://farjana.intelsofts.com/Projects/core/api/`;

  useEffect(() => {
    fetchCustomers();
  }, [Customers]);

  const fetchCustomers = async () => {
    try {
      const res = await fetch(`${base_url}/customer`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });

      if (!res.ok) {
        throw new Error('Failed to fetch users');
      }

      const data = await res.json();
      setCustomers(data.customers);

    } catch (err) {
      console.error('Error:', err.message);
    }
  };

  const deleteCustomer = async (id) => {
    try {
      const res = await fetch(`${base_url}/customer/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ id: id })
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

  const handleCreate = () => {

  }

  const handleView = (customer) => {
    console.log(customer)
  }

  const handleEdit = (customer) => {
    console.log(customer)
  }

  const handleDelete = (id) => {
    if (confirm("Are you sure?")) {
      deleteCustomer(id);
    }
  }

  return (
    <>

      <Card title="Customers">
        <NavLink className="btn btn-primary" to="/customer/create">New</NavLink>

        <table className="table">
          <tbody>


            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Created_at</th>
              <th>Updated_at</th>
              <th>Address</th>
              <th>Photo</th>
            </tr>
            {customers.map(customer => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.mobile}</td>
                <td>{customer.email}</td>
                <td>{customer.created_at}</td>
                <td>{customer.updated_at}</td>
                <td>{customer.address}</td>
                <td><img src={`http://farjana.intelsofts.com/Projects/core/img/${customer.photo}`} width="100" /></td>
                <td className="btn-group">
                  <a onClick={() => navigate('/customer/detail', { state: customer })} className="btn btn-success text-white">View</a>
                  <a onClick={() => navigate("/customer/edit", { state: customer })} className="btn btn-primary text-white">Edit</a>
                  <a onClick={() => handleDelete(customer.id)} className="btn btn-danger text-white">Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  )
}

export default Customers;