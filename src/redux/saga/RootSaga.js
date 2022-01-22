import * as constant from "../constant/Constants";
import { fork, all, takeLatest } from "redux-saga/effects";
import { logIn } from "./LoginSaga";

function* loginSaga() {
  yield takeLatest(constant.Login_Request, logIn);
}

export default function* rootSaga() {
  yield all([fork(loginSaga)]);
}
