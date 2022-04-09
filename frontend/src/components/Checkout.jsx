import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import StripeBtn from "./stripeBtn";

async function makePayToDB(prods) {
  try {
    let res = await axios({
      method: "post",
      url: "http://localhost:8080/pay",
      data: prods,
    });
    console.log(res);

    let data = res.data;
    console.log(data);
  } catch (error) {
    console.log(error.response); // this is the main part. Use the response property from the error object
  }
}

const Checkout = (props) => {
  React.useEffect(() => {
  //  makePayToDB(state);
  }, []);
  const state = useSelector((state) => state.handleCart);

  var total = 0;
  const itemList = (item) => {
    total = total + item.price * item.qty;

    console.log("X", total);

    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">
            {item.qty} X {item.title}
          </h6>
        </div>
        <span className="text-muted">E£ {item.price}</span>
      </li>
    );
  };

  return (
    <>
      <div  className="container my-5">
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
                  <StripeBtn total={total}  />
              </div>
          </div>
          <div className="col-md-7 col-lg-8"></div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
