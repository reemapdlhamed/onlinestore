import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "../../gov.json";
import { Formik, Form, Field } from "formik";
import "./styles.css";

import "bootstrap/dist/css/bootstrap.css";
import { saveShippingAddress } from "../../redux/action/Cart";
import { PersistFormikValues } from "formik-persist-values";
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

  /* 
  return (
    <Formik
      initialValues={{
        username: "",
        name: "",
        mobilenumber: "",
        email: "",
        password: "",
        url: "",
        genderOptions: "",
        DateofBirth: "",
        SubscribetoNewsletter: ""
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched, isValidating }) => (
        <div className="container">
          {console.log("rendering...", ++renderCount)}
          <div className="col-sm-12">
            <h3>Client Profile</h3>
          </div>
          <div className="col-sm-12">
            <Form>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="text"
                  placeholder="Username"
                  name="username"
                  validate={validateUserName}
                />
                {errors.username &&
                  touched.username &&
                  errorMessage(errors.username)}
              </div>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  name="name"
                  validate={validateName}
                />
                {errors.name && touched.name && errorMessage(errors.name)}
              </div>
              <div className="form-group">
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  validate={validateEmail}
                />
                {errors.email && touched.email && errorMessage(errors.email)}
              </div>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="tel"
                  placeholder="Mobile number"
                  name="mobilenumber"
                  validate={validateMobileNumber}
                />
                {errors.mobilenumber &&
                  touched.mobilenumber &&
                  errorMessage(errors.mobilenumber)}
              </div>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="url"
                  placeholder="Website"
                  name="Website"
                />
              </div>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                  validate={validatePassword}
                />
                {errors.password &&
                  touched.password &&
                  errorMessage(errors.password)}
              </div>
              <div className="form-group">
                <label>Gender</label>
                <br />
                <div className="form-check form-check-inline">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="genderOptions"
                    value="Male"
                    id="inlineRadio1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="genderOptions"
                    value="Female"
                    id="inlineRadio2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Female
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="genderOptions"
                    value=" Non-binary"
                    id="inlineRadio3"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio3">
                    Non-binary
                  </label>
                </div>
              </div>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="datetime"
                  placeholder="Date of Birth"
                  name="DateofBirth"
                  validate={validateDateOfBirth}
                />
                {errors.DateofBirth &&
                  touched.DateofBirth &&
                  errorMessage(errors.DateofBirth)}
              </div>
              <div className="form-group">
                <Field
                  component="textarea"
                  className="form-control"
                  name="About"
                />
              </div>
              <div className="form-group">
                <Field
                  type="checkbox"
                  placeholder="Subscribe to Newsletter"
                  name="SubscribetoNewsletter"
                  id="customCheck1"
                />
                <label htmlFor="customCheck1"> Subscribe to Newsletter</label>
              </div>
              <div className="form-group">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
  */
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center login-center min-vh-100">
        <Formik
          initialValues={{}}
          onSubmit={(values) => {
            console.log(values);

            if (
              values.city !== "" &&
              values.appartment !== "" &&
              values.street !== "" &&
              values.phone !== ""
            )
              history.push("/payment");
          }}
        >
          {(props) => (
            <div className="formLogin">
              <div className="col-sm-12 ">
                <h3>Client Address</h3>
              </div>
              <div className="">
                <Form>
                  <div className="form-group">
                    <label htmlFor="appartment"></label>
                    <Field
                      className="form-control  input"
                      type="text"
                      name="appartment"
                      placeholder="Enter appartment"
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="street" className=""></label>
                    <Field
                      className="form-control input"
                      type="text"
                      name="street"
                      placeholder="Enter street"
                      minLength={5}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className=""></label>
                    <Field
                      type="text"
                      className="form-control input"
                      pattern="^01[0-2]\d{1,8}$"
                      maxLength={11}
                      minLength={11}
                      name="phone"
                      placeholder="Enter phone"
                      required
                    />
                  </div>

                  <div className="form-group ">
                    <label htmlFor="city" className="mt-3"></label>

                    <Field className="form-control selectBox" name="city">
                      {({ field }) => (
                        <select className="select" {...field}>
                          <option>Select Your Country</option>
                          {/* <option value=""></option> */}
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
                    className=" button"
                  >
                    Submit
                  </button>
                  <PersistFormikValues name="form" />
                </Form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ShippingScreen;
