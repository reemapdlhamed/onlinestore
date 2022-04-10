import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./pages/NotFound";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "../src/pages/Login/Login";
import Payment from "../src/components/Payment";
import Shipping from "../src/components/Shipping";

import Register from "../src/pages/register/register";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import UserProfile from "./pages/userProfile/UserProfile";
import Footer from "./components/Footer";
import FAQs from "./pages/FAQs";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/about" component={About} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/shipping" component={Shipping} />
        <Route path={"/login"} component={Login} />
        <Route path={"/register"} component={Register} />
        <Route path={"/payment"} component={Payment} />
        <Route path={"/FAQs"} component={FAQs} />
        <Route exact path={"/profile"} component={UserProfile}/>
        <Route path={"*"} component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
