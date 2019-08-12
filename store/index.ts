import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as chart from "./chart";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const chartReducer = chart.chart;
const reducer = combineReducers({
  chartReducer
});

export const store = createStore(
  reducer,
  //connect saga
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// then run the saga
sagaMiddleware.run(chart.saga);
