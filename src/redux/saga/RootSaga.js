import * as constant from "../constant/Constants";
import { fork, all, takeLatest } from "redux-saga/effects";
import { logIn } from "./LoginSaga";
import { Signup } from "../saga/SignupSaga";
import { List } from "../saga/ListSaga";
function* PollingApp() {
  yield takeLatest(constant.Login_Request, logIn);
  yield takeLatest(constant.Signup_Request, Signup);
  yield takeLatest(constant.List_Request, List);
}

export default function* rootSaga() {
  yield all([fork(PollingApp)]);
}
