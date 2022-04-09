import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { saveShippingAddress } from "../redux/action/Cart";

const ShippingScreen = ({ history }) => {
    const state = useSelector((state) => state.handleCart);
    if(state.length===0)
    {
      history.push("/"); 
    }
  window.scrollTo(0, 0);
  /*
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
*/
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };
  return (
    <>
      <div
        style={{
          margin: "0 auto",
          display: "block",
          marginTop: "200px",
        }}
        className="container d-flex justify-content-center align-items-center login-center"
      >
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>DELIVERY ADDRESS</h6>
          <input
            type="text"
            placeholder="Enter address"
            //     value={address}
            required
            //   onChange={(e) => setAddress(e.target.value)}
          />
          <div style={{ marginTop: "50px",marginBottom:"50px" }}>
            {" "}
            <input
              type="text"
              placeholder="Enter city"
              //  value={city}
              required
              //     onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div >
          <input
            type="text"
            placeholder="Enter postal code"
            //   value={postalCode}
            required
            //     onChange={(e) => setPostalCode(e.target.value)}
          />
          </div>
          <br></br>
          <button type="submit">Continue</button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
