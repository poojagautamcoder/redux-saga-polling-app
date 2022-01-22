import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import SignupReducer from "../reducers/SignupReducer";
const rootReducer = combineReducers({
  LoginReducer,
  SignupReducer,
});
export default rootReducer;
