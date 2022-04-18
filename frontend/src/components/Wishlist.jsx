import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart, zeroCart } from "../redux/action";
import axios from "axios";
import StripeBtn from "./stripeBtn";
import Product from "./Product";
import { Rating } from "@mui/material";

export default function Wishlist() {
  //   const [price, setPrice] = useState({
  //     p: 0,
  //   });

  //   const state = useSelector((state) => state.handleCart);
  //   const dispatch = useDispatch();
  //
  console.log("ADEL", JSON.parse(localStorage.getItem("wishlist")));
  let local = JSON.parse(localStorage.getItem("wishlist"));
  if (!local) local = [];
  return (
    <div className=" bg-light rounded-3 py-5 min-vh-100">
      <div className="container">
        {local.map((loca) => (
          <div key={loca}>
            {" "}
            <div class="card mb-3" style={{ maxwidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={loca.images} 
                  class="img-fluid rounded-start my-3 mx-3"
                  height="200px"
              width="180px" 
                  alt={loca.name} />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title text-danger fw-bold">{loca.name}</h5>
                    <p class="card-text">
                    <p>description :</p>  {loca.description}
                    </p> 
                    <p class="card-text fw-bold">
                    brand : {loca.brand} 
                    </p>
                    <p class="card-text fw-bold">
                    Price : {loca.price} E£
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        ))}
      </div>

      {/* <>
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <button className="btn-close float-end" aria-label="Close"></button>
            <div className="row justify-content-center"></div>
          </div>
        </div>
      </> */}
    </div>
  );
}
