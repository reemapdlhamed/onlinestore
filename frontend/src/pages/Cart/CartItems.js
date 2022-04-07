import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {useSelector,useDispatch} from 'react-redux'
import { DEL,DEC, INC } from "../../redux/actions/cart";

const CartItems = ({ productId, img, title, price, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div style={{ width: "70vw", maxWidth: "90vw", margin: "0px auto" }}>
      <div className="row" style={{ marginTop: "20px", marginLeft: "120px" }}>
        <div className="col-sm-2">
          <img
            src={img}
            className="img-fluid"
            alt={title}
            style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
          />
        </div>
        <div className="col-sm-2">
          <h5>{title} </h5>
          <h5 style={{ color: "#617d98" }}>${price}</h5>
          <DeleteIcon onClick={()=>dispatch(DEL(productId))} ></DeleteIcon>
        </div>
        <div className="col-sm-8">
        <ArrowDropUpIcon onClick={()=>dispatch(INC(productId))} > inc</ArrowDropUpIcon>
        <p style={{ marginTop: "10px" }}>{quantity}</p>
        <ArrowDropDownIcon onClick={()=>dispatch(DEC(productId))} > dec</ArrowDropDownIcon>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
