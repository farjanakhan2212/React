import { useEffect } from "react";
import { useState } from "react";

const ManageInvoice = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://farjana.intelsofts.com/Projects/core/api/product')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Product Details</h5>
          <a href="/manage-invoice" className="btn btn-primary btn-sm">
            + Add New Product
          </a>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover table-striped mb-0">
              <thead className="table-light">
                <tr>
                  <th>Id</th>
                  <th>Photo</th>
                  <th>Barcode</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map(product => (
                    <tr key={product.id}>
                    <td>{product.id}</td>
                    <td><img src={`http://farjana.intelsofts.com/Projects/core/img/${product.photo}`} width="100" /></td>
                    <td>{product.barcode}</td>
                    <td>{product.name}</td>
                    <td>{product.offer_price}</td>
                    
                    <td className="btn-group">
                        <a onClick={() => navigate('/product/detail', { state: product })} className="btn btn-success text-white">View</a>
                        <a onClick={() => navigate("/product/edit",{state: product})}  className="btn btn-primary text-white">Edit</a>
                        <a onClick={() => handleDelete(product.id)} className="btn btn-danger text-white">Delete</a>
                    </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ManageInvoice;