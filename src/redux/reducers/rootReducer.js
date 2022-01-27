import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import SignupReducer from "../reducers/SignupReducer";
import ListReducer from "../reducers/ListReducer";
import DashboardReducer from "../reducers/DashboradReducer";
import EditpollReducer from "./EditpollReducer";
import DelpollsReducer from "./DelpollsReducer";
import AdduserReducer from "./AdduserReducer";
const rootReducer = combineReducers({
  LoginReducer,
  SignupReducer,
  ListReducer,
  DashboardReducer,
  EditpollReducer,
  DelpollsReducer,
  AdduserReducer,
});
export default rootReducer;
