import  React , { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart, zeroCart } from "../redux/action";
import axios from "axios";
import StripeBtn from "./stripeBtn";
import Product from "./Product";

export default function Wishlist() {
//   const [price, setPrice] = useState({
//     p: 0,
//   });

//   const state = useSelector((state) => state.handleCart);
//   const dispatch = useDispatch();
// 
  
    let local ={}
  
//   const emptyWishlist= () => {
//     return (
//       <div className="px-4 my-5 bg-light rounded-3 py-0">
//         <div className="container min-vh-100">
//           <div className="alert alert-info text-center mt-3">
//             <h3>Your Cart is Empty</h3>
//             <NavLink
//               to="/products"
//               className="btn btn-outline-dark  ms-2 px-3 py-2"
//             >
//               SHOPPING NOW
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     );
//   };
//   const wishlistItems = () => {
//     return (
      
//     );
//   };

  return (
    <div>
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <button
              className="btn-close float-end"
              aria-label="Close"
            ></button>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={local.images}
                  alt={local.name}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{local.name}</h3>
                <hr />
                <h5>description : {local.description} E£</h5>
                <br />
                <h5>brand : {local.brand} E£</h5>
                <br />
                <h5>Price : {local.price} E£</h5>
                <br />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
