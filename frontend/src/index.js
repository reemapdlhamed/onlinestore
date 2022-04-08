import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {store,persistor} from './redux/store';
import {PersistGate} from "redux-persist/lib/integration/react";

ReactDOM.render(
  <PersistGate persistor={persistor} >
  <BrowserRouter>
  <Provider store ={store} >
    <App />
    </Provider>
  </BrowserRouter>
  </PersistGate>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
