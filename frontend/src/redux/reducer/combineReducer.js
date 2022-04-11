import { combineReducers } from "redux";
import handleCart  from "./handleCart";
import handleOrders from "./handleOrders";
import  rootReducers  from "./index";
import { ProductsReducer } from "./Products";



const r= combineReducers({
 handleCart:handleCart,
 handleOrders:handleOrders,
 rootReducers:rootReducers,
 ProductsReducer:ProductsReducer
});

export default r