import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    
    <nav className="navbar navbar-light navbar-vertical navbar-expand-xl">
  <div className="d-flex align-items-center">
    <div className="toggle-icon-wrapper">
      <button className="btn navbar-toggler-humburger-icon navbar-vertical-toggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line" /></span></button>
    </div><a className="navbar-brand" href="index.html">
      <div className="d-flex align-items-center py-3"><img className="me-2" src="assets/img/icons/spot-illustrations/logo.png" alt="logo" width={120} /><span className="font-sans-serif"></span>
      </div>
    </a>
  </div>
  <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
    <div className="navbar-vertical-content scrollbar">
      <ul className="navbar-nav flex-column mb-3" id="navbarVerticalNav">
       
       {/* Dashboard */}
        <li className="nav-item">         
          <a className="nav-link dropdown-indicator" href="#dashboard" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="dashboard">
            <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-chart-pie" /></span><span className="nav-link-text ps-1">Dashboard</span>
            </div>
          </a>
          <ul className="nav collapse" id="dashboard">          
            <li className="nav-item">
              <NavLink className="nav-link active" to="/">
                <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Home</span>
                </div>
              </NavLink>
              {/* more inner pages*/}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/dashboard">
                <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Summary</span>
                </div>
              </NavLink>
              {/* more inner pages*/}
            </li>            
          </ul>
        </li>

           {/* Inventory */}
           <li className="nav-item">
          {/* parent pages*/}<a className="nav-link dropdown-indicator" href="#inventory" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="dashboard">
            <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-chart-pie" /></span><span className="nav-link-text ps-1">Inventory</span>
            </div>
          </a>
          <ul className="nav collapse" id="inventory">          
           
            <li className="nav-item"><NavLink className="nav-link active" to="/product/create">
                <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Create Product</span>
                </div>
              </NavLink>
              {/* more inner pages*/}
            </li>
            <li className="nav-item"><NavLink className="nav-link" to="/product">
                <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Manage Product</span>
                </div>
              </NavLink>
              {/* more inner pages*/}
            </li>
       
          </ul>
        </li>

          {/* Purchase */}
          <li className="nav-item">
          {/* parent pages*/}<a className="nav-link dropdown-indicator" href="#purchase" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="dashboard">
            <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-chart-pie" /></span><span className="nav-link-text ps-1">Purchase</span>
            </div>
          </a>
          <ul className="nav collapse" id="purchase">          
           
          <li className="nav-item"><NavLink className="nav-link active" to="/create-invoice">
                <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Create Invoice</span>
                </div>
              </NavLink>
              {/* more inner pages*/}
            </li>
            <li className="nav-item"><NavLink className="nav-link" to="/manage-invoice">
                <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Manage Invoice</span>
                </div>
              </NavLink>
              {/* more inner pages*/}
            </li>
         
          </ul>
        </li>
     
     {/* Sales */}
        <li className="nav-item">
          {/* parent pages*/}<a className="nav-link dropdown-indicator" href="#sales" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="dashboard">
            <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-chart-pie" /></span><span className="nav-link-text ps-1">Sales</span>
            </div>
          </a>
          <ul className="nav collapse" id="sales">          
           
            <li className="nav-item">
              <NavLink className="nav-link active" to="/create-order">
                <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Create Order</span>
                </div>
              </NavLink>
              {/* more inner pages*/}
            </li>
            <li className="nav-item"><NavLink className="nav-link" to="/manage-order">
                <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Manage Order</span>
                </div>
              </NavLink>
              {/* more inner pages*/}
            </li>
           
          </ul>
        </li>

           {/* Stock */}
           <li className="nav-item">
          {/* parent pages*/}<a className="nav-link dropdown-indicator" href="#stock" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="dashboard">
            <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-chart-pie" /></span><span className="nav-link-text ps-1">Stock</span>
            </div>
          </a>
          <ul className="nav collapse" id="stock">          
           
            <li className="nav-item"><NavLink className="nav-link active" to="/stock">
                <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Create Stock</span>
                </div>
              </NavLink>
              {/* more inner pages*/}
            </li>
            <li className="nav-item"><NavLink className="nav-link" to="/stock/save">
                <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Manage Stock</span>
                </div>
              </NavLink>
              {/* more inner pages*/}
            </li>
       
          </ul>
        </li>

            {/* Customer */}
            <li className="nav-item">
          {/* parent pages*/}<a className="nav-link dropdown-indicator" href="#customer" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="dashboard">
            <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-chart-pie" /></span><span className="nav-link-text ps-1">Customer</span>
            </div>
          </a>
          <ul className="nav collapse" id="customer">          
           
            <li className="nav-item"><NavLink className="nav-link active" to="/customer/create">
                <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Create Customer</span>
                </div>
              </NavLink>
              {/* more inner pages*/}
            </li>
            <li className="nav-item"><NavLink className="nav-link" to="/customer">
                <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Manage Customer</span>
                </div>
              </NavLink>
              {/* more inner pages*/}
            </li>
       
          </ul>
        </li>

            {/* Account */}
            <li className="nav-item">
          {/* parent pages*/}<a className="nav-link dropdown-indicator" href="#account" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="dashboard">
            <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-chart-pie" /></span><span className="nav-link-text ps-1">Accounting</span>
            </div>
          </a>
          <ul className="nav collapse" id="account">          
           
            <li className="nav-item"><NavLink className="nav-link active" to="/moneyreceipt/create">
                <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Create MR</span>
                </div>
              </NavLink>
              {/* more inner pages*/}
            </li>
            <li className="nav-item"><NavLink className="nav-link" to="/moneyreceipt">
                <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Manage MR</span>
                </div>
              </NavLink>
              {/* more inner pages*/}
            </li>
            {/* <li className="nav-item"><NavLink className="nav-link active" to="/invoice/create">
                <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Create Invoice</span>
                </div>
              </NavLink> */}
              {/* more inner pages*/}
            {/* </li> */}
            {/* <li className="nav-item"><NavLink className="nav-link active" to="/invoice">
                <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Manage Invoice</span>
                </div>
              </NavLink> */}
              {/* more inner pages*/}
            {/* </li> */}
       
          </ul>
        </li>

            {/* Company */}
            <li className="nav-item">
          {/* parent pages*/}<a className="nav-link dropdown-indicator" href="#company" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="dashboard">
            <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-chart-pie" /></span><span className="nav-link-text ps-1">Company</span>
            </div>
          </a>
          <ul className="nav collapse" id="company">          
           
            <li className="nav-item"><NavLink className="nav-link active" to="/company/create">
                <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Create Company</span>
                </div>
              </NavLink>
              {/* more inner pages*/}
            </li>
            <li className="nav-item"><NavLink className="nav-link" to="/company">
                <div className="d-flex align-items-center"><span className="nav-link-text ps-1">Manage Company </span>
                </div>
              </NavLink>
              {/* more inner pages*/}
            </li>
       
          </ul>
        </li>


  

      
        
      </ul>
      <div className="settings mb-3">
        <div className="card shadow-none">
          <div className="card-body alert mb-0" role="alert">
            <div className="btn-close-falcon-container">
              <button className="btn btn-link btn-close-falcon p-0" aria-label="Close" data-bs-dismiss="alert" />
            </div>
            <div className="text-center"><img src="assets/img/icons/spot-illustrations/navbar-vertical.png" alt="vartical png" width={80} />
              <p className="fs--2 mt-2">Loving what you see? <br />Get your copy of <a href="#!">FreshShop</a></p>
              <div className="d-grid"><a className="btn btn-sm btn-purchase" href="https://themes.getbootstrap.com/product/falcon-admin-dashboard-webapp-template/" target="_blank">Purchase</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

    
    
    </>
  )
}

export default Sidebar