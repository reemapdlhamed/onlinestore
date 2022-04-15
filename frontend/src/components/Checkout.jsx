import React from "react";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import StripeBtn from "./stripeBtn";
import { clearLocalStorageCart } from "../redux/action/Cart";
import { goToHome } from "../redux/action/Cart";




const Checkout = (props) => {



  
  const dispatch = useDispatch();

  if(!props.location.state){
  props.history.push("/");
  window.location.reload()

  }


  
  const clearCart = ()=>{
    console.log("LOCAL",localStorage.getItem("form"))
    let res2 =  axios({
      method: "post",
      url: "http://localhost:8080/cart/buy",
      headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
      data: JSON.parse(localStorage.getItem("form"),props.location.state.paymentMethod ),
      
    }).then((res) => {
      console.log("ORDER DONE")
     
    });
  


    props.history.push("/");
    //dispatch(clearLocalStorageCart());

        window.location.reload()

  }


  const state = useSelector((state) => state.handleCart);
  if(state.length===0)
  {
    dispatch(goToHome())
  }
  var total = 0;
  const itemList = (item) => {
    total = total + item.price * item.qty;

    return (
      <li className="list-group-item d-flex justify-content-between lh-sm ">
        <div>
          <h6 className="my-0">
            {item.qty} X {item.name}
          </h6>
        </div>
        <span className="text-muted">E£ {item.price}</span>
      </li>
    );
  };

  return (
    <>
      <div  className="container my-5 min-vh-100">
        <div  style={{margin:"0 auto",display:"block"}}  className="row g-5">
          <div style={{margin:"0 auto",display:"block" }}   className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">
                {state.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {state.map(itemList)}

              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${total}</strong>
              </li>
            </ul>

              <div  className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />

                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
              <div style={{margin:"25px"}} >
                  {props.location.state&&props.location.state.paymentMethod==="card"&&
                  
                  <StripeBtn  total={total}  />}


                  {props.location.state&&props.location.state.paymentMethod==="cod"&&
                  <button  onClick={clearCart} >confirm with cash on delievery
                  
                  </button>  }

              </div>
          </div>
          <div className="col-md-7 col-lg-8"></div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
