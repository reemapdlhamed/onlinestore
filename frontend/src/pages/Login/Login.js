// import React, { useState, useRef, useEffect, useContext } from "react";
// import AuthContext from "../../Context/AuthProvider";
// import "./login.css";
// import { Link } from "react-router-dom";
// // import Login from "./Login";
// // import { axiosInstance } from "../../Network/axiosconfig";
// import axios from "../../api/axios";
// const LOGIN_URL = "http://127.0.0.1:8080/login";

// function Login() {
//   const { setAuth } = useContext(AuthContext);
//   // const userRef = useRef();
//   const emailRef = useRef();
//   const errorRef = useRef();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState(false);
//   useEffect(() => {
//     emailRef.current.focus();
//   }, []);
//   useEffect(() => {
//     setErrMsg("");
//   }, [email, password]);

//   // const signIn = (e) => {
//   //   e.preventDefault();
//   // };
//   // const register = (e) => e.preventDefault();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         LOGIN_URL,
//         JSON.stringify({ email, password }),
//         {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true,
//         }
//       );
//       console.log(JSON.stringify(response?.data));
//       console.log(response);
//       const accessToken = response?.data?.accessToken;
//       const role = response?.data?.role;
//       setAuth({ email, password, role, accessToken });
//       setEmail("");
//       setPassword("");
//       setSuccess(true);
//     }
//catch (error) {
//       if (!error?.response) {
//         setErrMsg("No Server Response");
//       } else if (error.response?.status === 400) {
//         setErrMsg("Missing Email Or Password");
//       } else if (error.response?.status === 401) {
//         setErrMsg("Unauthorized");
//       } else {
//         setErrMsg("Login Failed");
//       }
//       errorRef.current.focus();
//     }
//     console.log(password, email);
//   };
//   return (
//     <>
//       {success ? (
//         <section>
//           <h1>You Are Logged In</h1>
//           <br />
//           <p>
//             <a href="/home"> Go To Home</a>
//           </p>
//         </section>
//       ) : (
//         <div className="login">
//           <p
//             ref={errorRef}
//             className={errMsg ? "errMsg" : "offScreen"}
//             aria-live="assertive"
//           >
//             {errMsg}
//           </p>
//           <Link to="/">
//             <img
//               className="login__logo"
//               src="images/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg"
//               alt="amazon logo "
//             />
//           </Link>
//           <div className="login__container">
//             <h1>Sign In</h1>
//             <form onSubmit={handleSubmit}>
//               <h5>E-mail </h5>
//               <input
//                 type="text"
//                 ref={emailRef}
//                 value={email}
//                 autoComplete="off"
//                 required
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//               />
//               <h5>Password</h5>
//               <input
//                 type="password"
//                 value={password}
//                 required
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button
//                 // onClick={signIn}
//                 type="submit"
//                 className="login__signin__button"
//               >
//                 Sign In
//               </button>
//             </form>
//             <p>
//               by signing in you agree to our application conditions of use &
//               sale . please see your privacy notice
//             </p>
//             <button
//               href="/register"
//               // onClick={register}
//               className="login__registerbutton"
//             >
//               Create Your Account
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Login;
// import React, { useState, useRef, useEffect, useContext } from "react";
// import AuthContext from "../../Context/AuthProvider";
// import "./login.css";
// import { Link } from "react-router-dom";
// // import Login from "./Login";
// // import { axiosInstance } from "../../Network/axiosconfig";
// import axios from "../../api/axios";

// const LOGIN_URL = "http://127.0.0.1:8080/login";

// function Login() {

//   const { setAuth } = useContext(AuthContext);
//   // const userRef = useRef();
//   const emailRef = useRef();
//   const errorRef = useRef();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState(false);
//   useEffect(() => {
//     emailRef.current.focus();
//   }, []);
//   useEffect(() => {
//     setErrMsg("");
//   }, [email, password]);

// const signIn = (e) => {
//   e.preventDefault();
// };
// const register = (e) => e.preventDefault();
//   async function handleSubmit() {
//     try {
//       let res = await axios({
//         method: 'post',
//         url: 'http://localhost:8080/login',
//         data:{email:"admin@gmail.com",password:"admin"}
//       });

//       let data = res.data;
//       console.log(data)
//       return data;
//     } catch (error) {
//       console.log(error.response); // this is the main part. Use the response property from the error object

//       return error.response;
//     }

//   }
//     console.log(password, email);

//   return (
//     <>
//       {success ? (
//         <section>
//           <h1>You Are Logged In</h1>
//           <br />
//           <p>
//             <a href="/home"> Go To Home</a>
//           </p>
//         </section>
//       ) : (
//         <div className="login">
//           <p
//             ref={errorRef}
//             className={errMsg ? "errMsg" : "offScreen"}
//             aria-live="assertive"
//           >
//             {errMsg}
//           </p>
//           <Link to="/">
//             <img
//               className="login__logo"
//               src="images/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg"
//               alt="amazon logo "
//             />
//           </Link>
//           <div className="login__container">
//             <h1>Sign In</h1>
//             <form onSubmit={handleSubmit}>
//               <h5>E-mail </h5>
//               <input
//                 type="text"
//                 ref={emailRef}
//                 value={email}
//                 autoComplete="off"
//                 required
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//               />
//               <h5>Password</h5>
//               <input
//                 type="password"
//                 value={password}
//                 required
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button
//                 // onClick={signIn}
//                 type="submit"
//                 className="login__signin__button"
//               >
//                 Sign In
//               </button>
//             </form>
//             <p>
//               by signing in you agree to our application conditions of use &
//               sale . please see your privacy notice
//             </p>
//             <button
//               href="/register"
//               // onClick={register}
//               className="login__registerbutton"
//             >
//               Create Your Account
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Login;

import React, { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "../../Context/AuthProvider";
import Products from "./../Products/Products";
import "./login.css";
import { Link, Redirect } from "react-router-dom";
// import Login from "./Login";
// import { axiosInstance } from "../../Network/axiosconfig";
import axios from "../../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Products from "./../Products/Products";
import { Switch, Route } from "react-router-dom";
import Product from "./../../components/Product";
import Home from "./../../components/Home";
function Login() {
  const { setAuth } = useContext(AuthContext);
  // const userRef = useRef();
  const emailRef = useRef();
  const errorRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  // const signIn = (e) => {
  //   e.preventDefault();
  // };
  // const register = (e) => e.preventDefault();

  async function loginHandler(e) {
    e.preventDefault();
    try {
      let response = await axios({
        method: "post",
        url: "http://localhost:8080/login",

        data: { email: email, password: password },
      });
      // localStorage.setItem("password", password);
      localStorage.setItem("email", email);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("role", response.data.data.role);
      localStorage.setItem("name", response.data.data.name);
      localStorage.setItem("order", response.data.data.orders);

      localStorage.setItem("data", response.data.data);

      window.location.replace("/");
      setSuccess(true);
      let data = response.data;
      console.log(data.accessToken);

      return data;
    } catch (error) {
      //   catch (error) {
      //     console.log(error.response); // this is the main part. Use the response property from the error object

      //     return error.response;
      //   }
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 500) {
        setErrMsg("Missing Email Or Password");
      } else if (error.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errorRef.current.focus();
    }
    console.log(password, email);
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // };
  // const name = email.substring(0, email.lastIndexOf("@"));
  const customId = "custom-id-yes";
  const difToast = () => {
    toast.success("Login Success, Welcome " + {name:localStorage.getItem("name")}, {
      theme: "dark",
      toastId: customId,
    });
  };
  return (
    <>
      {success ? (
        <section>
          <Home>
            <Route exact path="/" component={Home} />
          </Home>

          <br />
          <p>
            {difToast}
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </p>
        </section>
      ) : (
        <div className="login">
          <Link to="/">
            <img
              className="login__logo"
              src="/assets/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg"
              alt="amazon logo "
            />
          </Link>
          <div className="login__container">
            <p
              ref={errorRef}
              className={errMsg ? "errMsg" : "offScreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>Sign In</h1>
            <form onSubmit={loginHandler}>
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
              <button
                // onClick={signIn}
                type="submit"
                className="login__signin__button"
                onClick={difToast}
              >
                Sign In
              </button>
            </form>
            <p>
              by signing in you agree to our application conditions of use &
              sale . please see your <a href="/about">privacy notice</a> <br />
              <a href="/contact"> need a help!!</a>
            </p>
            <button
              // onClick={register}
              className="login__registerbutton"
            >
              <a href="/register"> Create Your Account</a>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
