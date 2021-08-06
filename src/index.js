import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import reduxLogger from "redux-logger";
import reduxThunk from "redux-thunk";

// We can use react-logger instead, it will be passed to middleware
const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd(action.type);
  return result;
};

// Since store takes three arguments : reducers, optionalPreloadedState and Optional Enhancer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxLogger, reduxThunk))
);

console.log(rootReducer);
console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();