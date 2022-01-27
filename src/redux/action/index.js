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

export const DashboardRequest = createAction(constant.Dashboard_Request);
export const DashboardSuccess = createAction(constant.Dashboard_Success);
export const DashboardError = createAction(constant.Dashboard_Error);

export const EditpollRequest = createAction(constant.Editpoll_Request);
export const EditpollSuccess = createAction(constant.Editpoll_Success);
export const EditpollError = createAction(constant.Editpoll_Error);

export const DelpollsRequest = createAction(constant.Delpolls_Request);
export const DelpollsSuccess = createAction(constant.Delpolls_Success);
export const DelpollsError = createAction(constant.Delpolls_Error);

export const AddpollRequest = createAction(constant.Addpoll_Request);
export const AddpollSuccess = createAction(constant.Addpoll_Success);
export const AddpollError = createAction(constant.Addpoll_Error);
