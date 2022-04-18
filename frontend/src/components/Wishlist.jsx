import React, { useState, useEffect } from "react";
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
  console.log("ADEL", JSON.parse(localStorage.getItem("wishlist")));
  let local = JSON.parse(localStorage.getItem("wishlist"));
  if(!local)
  local=[]
  return (
    <div>
      {local.map((loca) => (
        <div key={loca}>
          {" "}
          <div className="col-md-4">
            <img
              src={loca.images}
              alt={loca.name}
              height="200px"
              width="180px"
            />
          </div>
          <div className="col-md-4">
            <h3>{loca.name}</h3>
            <hr />
            <h5>description : {loca.description} E£</h5>
            <br />
            <h5>brand : {loca.brand} E£</h5>
            <br />
            <h5>Price : {loca.price} E£</h5>
            <br />
          </div>{" "}
        </div>
      ))}
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <button className="btn-close float-end" aria-label="Close"></button>
            <div className="row justify-content-center"></div>
          </div>
        </div>
      </>
    </div>
  );
}
