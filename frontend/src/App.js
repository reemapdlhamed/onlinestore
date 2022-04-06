<<<<<<< HEAD
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound"
import Footer from './components/Footer';
import Header from './components/Header';
import login from "./Components/login";

function App() {
  return (
    <div className="App ">
    <BrowserRouter>
    <Header />
      <Switch>

        <Route path={"*"} component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </div>
  );
  }
  export default App;