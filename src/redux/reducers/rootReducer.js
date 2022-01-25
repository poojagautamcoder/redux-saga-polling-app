import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import SignupReducer from "../reducers/SignupReducer";
import ListReducer from "../reducers/ListReducer";
import DashboardReducer from "../reducers/DashboradReducer";
import EditpollReducer from "./EditpollReducer";
const rootReducer = combineReducers({
  LoginReducer,
  SignupReducer,
  ListReducer,
  DashboardReducer,
  EditpollReducer,
});
export default rootReducer;
