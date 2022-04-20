import { useState, useEffect, React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart, zeroCart,addWishlist,delWishlist,zeroWishlist } from "../redux/action";
import axios from "axios";
import StripeBtn from "./stripeBtn";

const Cart = () => {
  const [price, setPrice] = useState({
    p: 0,
  });


  const state = useSelector((state) => state.handleWishlist);

  const dispatch = useDispatch();



  const handleZero = (item) => {
    dispatch(zeroWishlist(item));
  };

  

  


  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-0">
        <div className="container min-vh-100">
          <div className="alert alert-info text-center mt-3">
            <h3>Your Wishlist is Empty</h3>
            <NavLink
              to="/products"
              className="btn btn-outline-dark  ms-2 px-3 py-2"
            >
              SHOPPING NOW
            </NavLink>
          </div>
        </div>
      </div>
    );
  };
  const cartItems = (product) => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <button
              onClick={() => handleZero(product)}
              className="btn-close float-end"
              aria-label="Close"
            ></button>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={product.images}
                  alt={product.name}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{product.name}</h3>
                <hr />
                <h5>Price : {product.price} E£</h5>

                <p className="lead fw-bold hide">
 
                </p>
                <br />
           
               
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className="container">
          <hr />
          <div className="row justify-content-center">
          <NavLink
              to="/products"
              className="btn btn-outline-dark mb-5 w-25 mx-auto "
            >
              Continue To Shopping
            </NavLink>
            <NavLink
              to="/shipping"
              className="btn btn-outline-dark mb-5 w-25 mx-auto "
            >
              Proceed to Checkout
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
