import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Switch ,Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from "./pages/NotFound";
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from "../src/pages/Login/Login"
import Register from "../src/pages/register/register";
// import Footer from "./components/Footer";


function App() {
  return (
    <> 
   <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/:id" component={Product} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/contact" component={Contact} />
      <Route path={"/login"} component={Login} />
      <Route path={"/register"} component={Register} />
      <Route path={"*"} component={NotFound} />
    </Switch>
    {/* <Footer /> */}
  
    </>
  );
}

export default App;
