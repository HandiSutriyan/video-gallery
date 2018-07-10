import {trackPageView} from "pawjs/src/utils/analytics";

// importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// importing carousel

// importing fontawesome
import "./resources/css/fontawesome.css";

// importing jquery
import "./resources/js/jquery.min.js";

// importing plugn js 
//import "bootstrap/dist/js/bootstrap.js";

//import module 


import * as appReducers from "./app/reducers";

export const reduxInitialState = {
  counter: {
    count: 5
  }
};
export const reduxReducers = appReducers;
export const onPageChange = function() {
  	trackPageView().catch();
};
// export const reduxEnahancers = [enhancer1, enhancer2];
// export const reduxMiddlewares = [middleware1, middleware2];

if (module.hot) module.hot.accept();