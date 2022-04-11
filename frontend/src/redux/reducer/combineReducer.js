import { combineReducers } from "redux";
import handleCart  from "./handleCart";
import  rootReducers  from "./index";
import { ProductsReducer } from "./Products";



const r= combineReducers({
 handleCart:handleCart,
 rootReducers:rootReducers,
 ProductsReducer:ProductsReducer
});

export default r