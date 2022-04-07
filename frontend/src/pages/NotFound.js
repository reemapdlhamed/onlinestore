import React from "react";
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center align-items-center">
          <h4 className="text-center mb-2 mb-sm-5">Page Not Found</h4>
          <img
            style={{ width: "100%", height: "300px", objectFit: "contain" }}
            src="/assets/not-found.png"
            alt="Not-found"
          />
        <NavLink to="/contact" className="btn btn-outline-primary"
            >Back to Home</NavLink>   
        </div>
      </div>
    </>
  );
};

export default NotFound;