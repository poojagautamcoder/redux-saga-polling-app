import * as constant from "../constant/Constants";
const initialstate = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  isLogin: false,
};

const LoginReducer = (state = initialstate, action) => {
  switch (action.type) {
    case constant.Login_Request:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: false,
        isLogin: false,
      };

    case constant.Login_Success:
      return {
        ...state,
        isLogin: true,
        isLoading: true,
        isSuccess: false,
        isError: false,
        response: action.payload.response,
      };

    case constant.Login_Error:
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        isSuccess: false,
        isError: true,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default LoginReducer;
