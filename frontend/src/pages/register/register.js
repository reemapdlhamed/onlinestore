/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Link } from "react-router-dom";

import { useRef, useState, useEffect } from "react";
import "./register.css";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

function register() {
  const emailRef = useRef();
  const errRef = useRef();
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setpasswordFocus] = useState(false);
  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const [errorMsg, setErrprMsg] = useState("");
  const [success, SetSuccess] = useState(false);
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);
  useEffect(() => {
    setErrprMsg("");
  }, [user, password, matchPassword]);
  return (
    <>
      {success ? (
        <section>
          <h1>You Are Logged In</h1>
          <br />
          <p>
            <a href="/home"> Go To Home</a>
          </p>
        </section>
      ) : (
        <div className="login">
          <p
            ref={errRef}
            className={errorMsg ? "errorMsg" : "offScreen"}
            aria-live="assertive"
          >
            {errorMsg}
          </p>
          <Link to="/">
            <img
              className="login__logo"
              src="/assets/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg"
              alt="amazon logo "
            />
          </Link>
          <div className="login__container">
            <h1>Create Account</h1>
            <form>
              <h5>Name</h5>
              <input
                type="text"
                ref={userRef}
                value={user}
                autoComplete="off"
                required
                onChange={(e) => {
                  setUser(e.target.value);
                }}
              />
              <h5>E-mail </h5>
              <input
                type="text"
                ref={emailRef}
                value={email}
                autoComplete="off"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <h5>Password</h5>
              <input
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <h5>Confirm Password</h5>
              <input
                type="password"
                value={matchPassword}
                required
                onChange={(e) => setMatchPassword(e.target.value)}
              />
              <button
                // onClick={signIn}
                type="submit"
                className="login__signin__button"
              >
                Sign Up
              </button>
            </form>
            <p>
              By creating an account, you agree to our Terms of Use and our
              Privacy Policy.
            </p>
            <button
              href="/login"
              // onClick={register}
              className="login__registerbutton"
            >
              Already have an account?
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default register;
