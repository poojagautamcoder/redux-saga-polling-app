import { createAction } from "redux-actions";
import * as constant from "../constant/Constants";

export const LoginRequest = createAction(constant.Login_Request);
export const LoginSuccess = createAction(constant.Login_Success);
export const LoginError = createAction(constant.Login_Error);

export const SignupRequest = createAction(constant.Signup_Request);
export const SignupSuccess = createAction(constant.Signup_Success);
export const SignupError = createAction(constant.Signup_Error);

export const ListRequest = createAction(constant.List_Request);
export const ListSuccess = createAction(constant.List_Success);
export const ListError = createAction(constant.List_Error);
