import * as constant from "../constant/Constants";
import { fork, all, takeLatest } from "redux-saga/effects";
import { logIn } from "./LoginSaga";
import { Signup } from "../saga/SignupSaga";
import { allPolls } from "../saga/DashboardSaga";
import { List } from "../saga/ListSaga";
function* PollingApp() {
  yield takeLatest(constant.Login_Request, logIn);
  yield takeLatest(constant.Signup_Request, Signup);
  yield takeLatest(constant.List_Request, List);
  yield takeLatest(constant.Dashboard_Request, allPolls);
}

export default function* rootSaga() {
  yield all([fork(PollingApp)]);
}
