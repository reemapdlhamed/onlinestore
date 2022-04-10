import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "../gov.json";
import { Formik, Form, Field } from "formik";

import "bootstrap/dist/css/bootstrap.css";
import { saveShippingAddress } from "../redux/action/Cart";
import { PersistFormikValues } from 'formik-persist-values';
const ShippingScreen = ({ history }) => {
  const state = useSelector((state) => state.handleCart);
  var govs = data[2].data.map((value) => value.governorate_name_en);
  

  const LOCAL_STORAGE_KEY = "form";
  const [options, setOptions] = useState(govs);

  if (state.length === 0) {
    history.push("/");
  }
  window.scrollTo(0, 0);
  /*
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [country, setCountry] = useState(shippingAddress.country);
*/
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(saveShippingAddress({ address, city, country }));
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
        <Formik
          initialValues={{}}
          onSubmit={(values) => {
            console.log(values)
      

            history.push("/payment");
          }}
        >
          {(props) => (
            <div>
              <div className="row mb-5">
                <div className="col-lg-12 text-center">
                  <h1 className="mt-5">address form</h1>
                </div>
              </div>
              <Form>
                <div className="form-group">
                  <label htmlFor="appartment"></label>
                  <Field
                    type="text"
                    name="appartment"
                    placeholder="Enter appartment"
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="street" className="mt-3"></label>
                  <Field
                    type="text"
                    name="street"
                    placeholder="Enter street"
                    minLength={5}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="mt-3"></label>
                  <Field
                    type="text"
                    pattern="^01[0-2]\d{1,8}$"
                    maxLength={11}
                    minLength={11}
                    name="phone"
                    placeholder="Enter phone"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="city" className="mt-3"></label>
                  <Field name="city">
                  
                    {({ field }) => (
                      
                      <select {...field}>
                      
                        <option value=""></option>
                        {govs.map((i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}

                      </select>
                    )}
                  </Field>
                </div>

                <button
                  type="submit"
                  onSubmit={submitHandler}
                  className="btn btn-primary btn-block mt-4"
                >
                  Submit
                </button>
                <PersistFormikValues name="form" />
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ShippingScreen;
