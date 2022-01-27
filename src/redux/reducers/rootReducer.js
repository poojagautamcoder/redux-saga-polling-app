import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import SignupReducer from "../reducers/SignupReducer";
import ListReducer from "../reducers/ListReducer";
import DashboardReducer from "../reducers/DashboradReducer";
import EditpollReducer from "./EditpollReducer";
import DelpollsReducer from "./DelpollsReducer";
const rootReducer = combineReducers({
  LoginReducer,
  SignupReducer,
  ListReducer,
  DashboardReducer,
  EditpollReducer,
  DelpollsReducer,
});
export default rootReducer;
