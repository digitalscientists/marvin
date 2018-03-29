import "babel-polyfill";
import "isomorphic-fetch";

import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter, push } from 'react-router-redux'
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";

import configureStore from "config/store";
import App from "views/App";

// Load CSS
import "index.css";

const {store, history} = configureStore();


// When used with server dehydrated state "ReactDOM.hydrate" should be called
const renderMethod = process.env.HYDRATE ? ReactDOM.hydrate : ReactDOM.render;

renderMethod(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.getElementById("root"),
);
