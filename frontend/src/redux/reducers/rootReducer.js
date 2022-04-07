import { combineReducers } from "redux";
import cartReducer from "./Cart";
import { ProductsReducer } from "./Products";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig={
    key:"root",
    storage,
    whitelist:['cart'],
}
const rootReducer = combineReducers ({
    cart:cartReducer,
    product:ProductsReducer
})
export default persistReducer(persistConfig,rootReducer)