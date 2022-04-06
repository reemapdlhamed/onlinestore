import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Header />
        <Switch>
          <Login />
          <Route path={"*"} component={NotFound} />
          <Route path={"/products"} component={Products} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
