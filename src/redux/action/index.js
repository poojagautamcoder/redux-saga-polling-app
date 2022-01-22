import { createAction } from "redux-actions";
import * as constant from "../constant/Constants";

export const LoginRequest = createAction(constant.Login_Request);
export const LoginSuccess = createAction(constant.Login_Success);
export const LoginError = createAction(constant.Login_Error);
