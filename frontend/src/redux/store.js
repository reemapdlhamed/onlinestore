import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {persistStore} from "redux-persist"

import rootReducer from "./reducers/rootReducer"

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);