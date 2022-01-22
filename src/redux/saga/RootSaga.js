import * as constant from "../constant/Constants";
import { fork, all, takeLatest } from "redux-saga/effects";
import { logIn } from "./LoginSaga";
import { Signup } from "../saga/SignupSaga";
function* PollingApp() {
  yield takeLatest(constant.Login_Request, logIn);
  yield takeLatest(constant.Signup_Request, Signup);
}

export default function* rootSaga() {
  yield all([fork(PollingApp)]);
}
