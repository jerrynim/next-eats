import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as menu from "./menu";
import createSagaMiddleware from "redux-saga";
import chart from "./chart";
const sagaMiddleware = createSagaMiddleware();
const chartReducer = menu.menu;
const reducer = combineReducers({
  chart,
  chartReducer
});

export const store = createStore(
  reducer,
  //connect saga
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// then run the saga
sagaMiddleware.run(menu.saga);
