import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {ProductsReducer} from "./reducers/Products";
export const store = createStore(ProductsReducer, composeWithDevTools(applyMiddleware(thunk)));