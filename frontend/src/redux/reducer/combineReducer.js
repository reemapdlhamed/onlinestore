import { combineReducers } from "redux";
import handleCart  from "./handleCart";
import  rootReducers  from "./index";
import { ProductsReducer } from "./Products";


export default combineReducers({
 handleCart:handleCart,
 rootReducers:rootReducers,
 ProductsReducer:ProductsReducer
});