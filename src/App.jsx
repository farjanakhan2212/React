import React from 'react'
import Dashboard from './pages/Dashboard'
//  import Summary from './pages/Summary'
import { BrowserRouter, Route, Routes,Outlet } from 'react-router-dom'
import NoPage from './pages/NoPage'
import Test from './pages/Test'

import CreateOrder from './pages/Sales/CreateOrder'
import ManageOrder from './pages/Sales/ManageOrder'

 import CreateStock from './pages/Stock/CreateStock'
 import ManageStock from './pages/Stock/ManageStock'

import About from './pages/Public/About'

import Products from './pages/Inventory/Products'
import CreateProduct from './pages/Inventory/CreateProduct'
import DetailProduct from './pages/Inventory/DetailProduct'
import EditProduct from './pages/Inventory/EditProduct'

import Company from './pages/Company/Company'
import CreateCompany from './pages/Company/CreateCompany'
import DetailCompany from './pages/Company/DetailCompany'
import EditCompany from './pages/Company/EditCompany'

import Customers from './pages/Customer/Customers'
import CreateCustomer from './pages/Customer/CreateCustomer'
import DetailCustomer from './pages/Customer/DetailCustomer'
import EditCustomer from './pages/Customer/EditCustomer'
 import ConfirmCustomer from './pages/Customer/ConfirmCustomer'

 import CreateMR from './pages/Accounting/CreateMR'
 import ManageMR from './pages/Accounting/ManageMR'
 import DetailMoneyReceipt from './pages/Accounting/DetailMoneyReceipt'
 import EditMoneyReceipt from './pages/Accounting/EditMoneyReceipt'



import InvoiceForm from './pages/Purchase/CreateInvoice'
import ManageInvoice from './pages/Purchase/ManageInvoice'

import Sidebar from './layout/Sidebar'
import Topbar from './layout/Topbar'
import Footer from './layout/Footer'



const App = () => {
    return (
    <BrowserRouter>
      <Sidebar/>
      <div className="content">
      <Topbar />
      <Routes>         
           <Route path='' element={<Dashboard />} />  
           <Route Index element={<Dashboard/>} />
           {/* {sales} */}
           <Route path="create-order" element={<CreateOrder desc="Description" />} />      
           <Route path="manage-order" element={<ManageOrder />} /> 

           {/* Product */}
           <Route path='product' element={<Products />} /> 
           <Route path='product/create' element={<CreateProduct /> } /> 
           <Route path='product/detail' element={<DetailProduct /> } /> 
           <Route path='product/edit' element={<EditProduct /> } /> 

           {/* {Purchase} */}

           <Route path="create-invoice" element={<InvoiceForm />} />    
           <Route path="manage-invoice" element={<ManageInvoice />} /> 

           {/* {Stock} */}

          <Route path="/stock" element={<CreateStock />} />      
           <Route path="/stock/save" element={<ManageStock />} /> 

               {/* Customer */}

         
               <Route path='customer' element={<Customers />} /> 
           <Route path='customer/create' element={<CreateCustomer /> } /> 
           <Route path='customer/detail' element={<DetailCustomer /> } /> 
           <Route path='customer/edit' element={<EditCustomer /> } /> 
           <Route path='customer/delete' element={<ConfirmCustomer /> } /> 
          

               {/* Account */}

          <Route path="/moneyreceipt/create" element={<CreateMR />} />      
           <Route path="/moneyreceipt" element={<ManageMR />} />  
           <Route path="/moneyreceipt/detail" element={<DetailMoneyReceipt />} />      
           <Route path="/moneyreceipt/edit" element={<EditMoneyReceipt />} /> 


               {/* Company */}

               <Route path='company' element={<Company />} /> 
           <Route path='company/create' element={<CreateCompany /> } /> 
           <Route path='company/detail' element={<DetailCompany /> } /> 
           <Route path='company/edit' element={<EditCompany /> } /> 
      



           <Route path="*" element={<NoPage />} />
          
     </Routes>    
      <Outlet />
      <Footer />
      </div>             
    </BrowserRouter>
    )
}

export default App