import React, { Fragment, useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useHistory } from "react-router-dom";

const StripeBtn = (props) => {
  const history = useHistory();

  const publishableKey =
    "pk_test_51KYAh7Fnja0F2DGHDY9fsDRS2ImeHhegy4pNuepcHaWjfXkPfePwmjl4e0LAOoIxPwKuNr6R1C6L61MtUkmhnkz000CQ1uElz2";

  const onToken = (token) => {
    
    const body = {
      amount: props.total * 100,
      token: token,
    };

    axios
      .post("http://localhost:8080/payment", body)
      .then((response) => {
        console.log(response);
        localStorage.removeItem('persist:root');
        history.push("/")
        window.location.reload()
      
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };

  return (
    
    <div>
      <StripeCheckout
        label={`confirm with paying ${props.total}$ with credit card`} //Component button text
        name="modal header" //Modal Header
        description="modal description"
        panelLabel="pay" //Submit button in modal
        amount={props.total * 100} //Amount in cents $9.99
        token={onToken}
        stripeKey={publishableKey}
        billingAddress={false}
      />
    </div>
  );
};
export default StripeBtn;
