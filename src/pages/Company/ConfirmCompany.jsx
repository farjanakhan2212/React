import React from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import Card from '../UI/Card';

function ConfirmCompany({ onDelete }) {
  const location = useLocation();
  const navigate = useNavigate();
  const company = location.state;

  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to delete this company?')) {
      onDelete(company.id); // Assuming onDelete is a prop passed to this component
      navigate('/company');
    }
  };

  return (
    <>
      <Card title="Confirm Company Deletion">
        <NavLink className="btn btn-secondary mb-3" to="/company">
          Back
        </NavLink>

        <div className="mb-3">
          <p>Are you sure you want to delete the following company?</p>

          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>ID</th>
                <td>{company.id}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{company.name}</td>
              </tr>
              <tr>
                <th>Mobile</th>
                <td>{company.mobile}</td>
              </tr>
              <tr>
                <th>Bin</th>
                <td>{company.bin}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{company.email}</td>
              </tr>
              <tr>
                <th>Website</th>
                <td>{company.website}</td>
              </tr>
              <tr>
                <th>City</th>
                <td>{company.city}</td>
              </tr>
              <tr>
                <th>Area</th>
                <td>{company.area}</td>
              </tr>
              <tr>
                <th>Street Address</th>
                <td>{company.street_address}</td>
              </tr>
              <tr>
                <th>Post Code</th>
                <td>{company.post_code}</td>
              </tr>
              <tr>
                <th>Inactive</th>
                <td>{company.inactive ? 'Yes' : 'No'}</td>
              </tr>
              <tr>
                <th>Logo</th>
                <td>
                  {company.logo ? (
                    <img
                      src={`http://farjana.intelsofts.com/Projects/core/img/${company.logo}`}
                      alt="Company Logo"
                      width="150"
                    />
                  ) : (
                    'No logo available'
                  )}
                </td>
              </tr>
            </tbody>
          </table>

          <form onSubmit={handleDelete}>
            <button type="submit" className="btn btn-danger">
              Confirm Delete
            </button>
            <NavLink to="/company" className="btn btn-secondary ms-2">
              Cancel
            </NavLink>
          </form>
        </div>
      </Card>
    </>
  );
}

export default ConfirmCompany;
