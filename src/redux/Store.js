import rootReducer from "../redux/reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../redux/saga/RootSaga";
// we need initial state otherwise , store will freak out
const initialstate = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialstate,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export default store;
