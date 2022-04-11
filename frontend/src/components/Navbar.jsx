import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  let button;

  const logOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("accessToken");
    window.location.reload();
  };
  // if (!localStorage.getItem("email")) {
  //   button = (
  //     <>

  //       <NavLink to="/login" className="btn btn-outline-primary">
  //       <i className="fas fa-sign-in-alt me-1"></i> Login
  //       </NavLink>
  //       <NavLink to="/register" className="btn btn-outline-primary ms-2">
  //         <i className="fas fa-user-plus me-1"></i> Register
  //       </NavLink>
  //     </>
  //   );
  // } else {
  //   // const email = localStorage.getItem("email");
  //   // const name = email.substring(0, email.lastIndexOf("@"));
  //   button = (
  //     <>

  //       <NavLink to="/profile" className="btn btn-outline-primary">
  //         <i className="fas fa-user me-1"></i> Welcome,{localStorage.getItem("name")}
  //       </NavLink>
  //       <button onClick={logOut} className="btn btn-outline-danger ms-2">
  //       <i className="fas fa-sign-out-alt me-1"></i>  Log Out
  //       </button>
  //     </>
  //   );
  // }
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white py-2
       shadow-sm"
        style={{ position: "relative" }}
      >
        <div className="container">
          <NavLink className="navbar-brand" to="#">
            E-commerce
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-1 mb-lg-1">
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  activeStyle={{
                    color: "black",
                  }}
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeStyle={{
                    color: "blue",
                  }}
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeStyle={{
                    color: "blue",
                  }}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeStyle={{
                    color: "blue",
                  }}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            {!localStorage.getItem("email") ? (
              <div className="dropdown">
                <Link
                  className="btn btn-secondary dropdown-toggle"
                  to="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Info
                </Link>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <NavLink to="/login" className="dropdown-item">
                      <i className="fas fa-sign-in-alt me-1"></i> Login
                    </NavLink>
                  </li>
                  <NavLink to="/register" className="dropdown-item">
                    <i className="fas fa-user-plus me-1"></i> Register
                  </NavLink>
                </ul>
              </div>
            ) : (
              <div className="dropdown">
                <Link
                  className="btn btn-secondary dropdown-toggle"
                  to="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Welcome,{localStorage.getItem("name")}
                </Link>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    {" "}
                    <NavLink to="/profile" className="dropdown-item">
                      <i className="fas fa-user me-1"></i> Profile
                    </NavLink>
                  </li>
                  <li>
                    <button onClick={logOut} className="dropdown-item">
                      <i className="fas fa-sign-out-alt me-1"></i> Log Out
                    </button>
                  </li>
                </ul>
              </div>
            )}

            <div className="buttons">
              {button}
              <NavLink to="/cart" className="btn btn-outline-success ms-2">
                <i className="fas fa-shopping-cart me-1"></i> Cart(
                {state.length})
              </NavLink>
              <NavLink to="/FAQs" className="btn btn-outline-primary ms-2">
                <i className="far fa-question-circle me-1"></i>FAQs
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;