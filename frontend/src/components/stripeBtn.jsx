import React, { Fragment,useState, useEffect  } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const stripeBtn = (props) => {
  const publishableKey = "pk_test_ZU3mlTy0q00DATc9EyF9A8jX";
   
  const onToken = token => {
    const body = {
      amount: props.total*100,
      token: token
  };

  axios
  .post("http://localhost:8080/payment", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };

  return (
 <div>
        <StripeCheckout
          name="amoazona"
          description="you have to pay"
          amount={props.total*100}
          token={token => this.props.handleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button style={{margin:"0 auto", display:"block" }} className="btn btn-primary">PAY NOW {props.total}$</button>
        </StripeCheckout>
      </div> 
  );
};
export default stripeBtn;