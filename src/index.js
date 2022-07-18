import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import './css/index.css';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from 'redux-thunk';

import reducers from "./reducers";

const store = createStore(
  reducers, //Reducers
  {}, // InitialState
  applyMiddleware(reduxThunk)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
