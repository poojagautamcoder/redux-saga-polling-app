import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import SignupReducer from "../reducers/SignupReducer";
import ListReducer from "../reducers/ListReducer";
const rootReducer = combineReducers({
  LoginReducer,
  SignupReducer,
  ListReducer,
});
export default rootReducer;
