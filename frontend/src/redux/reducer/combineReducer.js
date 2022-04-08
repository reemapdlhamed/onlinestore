import { combineReducers } from "redux";
import handleCart  from "./handleCart";
import  rootReducers  from "./index";
import { ProductsReducer } from "./Products";
import {persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:"root",
    storage,
    whitelist:["handleCart"]
}

const r= combineReducers({
 handleCart:handleCart,
 rootReducers:rootReducers,
 ProductsReducer:ProductsReducer
});

export default persistReducer(persistConfig,r);