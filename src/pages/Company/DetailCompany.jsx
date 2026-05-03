import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Card from "../UI/Card";

function DetailCompany() {
  const location = useLocation();
  const company = location.state;

  return (
    <>
      <Card title="Company Details">
        <NavLink className="btn btn-success" to="/company">Back</NavLink>

        <div>ID: {company.id}</div>
        <div>Name: {company.name}</div>
        <div>Mobile: {company.mobile}</div>
        <div>Bin: {company.bin}</div>
        <div>Email: {company.email}</div>
        <div>Website: {company.website}</div>
        <div>City: {company.city}</div>
        <div>Area: {company.area}</div>
        <div>Street Address: {company.street_address}</div>
        <div>Post Code: {company.post_code}</div>
        <div>Inactive: {company.inactive ? 'Yes' : 'No'}</div>
        <div>Logo: {company.logo}</div>

        <div>
          {company.logo ? (
            <img
              src={`http://farjana.intelsofts.com/Projects/core/img/${company.logo}`}
              alt="Company Logo"
              width="150"
            />
          ) : (
            <p>No logo available</p>
          )}
        </div>
      </Card>
    </>
  );
}

export default DetailCompany;
