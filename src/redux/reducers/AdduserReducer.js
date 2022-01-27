import * as constant from "../constant/Constants";
const initialstate = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  isAdduser: false,
};
const AdduserReducer = (state = initialstate, action) => {
  console.log(action, "action");
  switch (action.type) {
    case constant.Adduser_Request:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        isAdduser: false,
      };
    case constant.Adduser_Success:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        isAdduser: true,
        response: action.payload.response,
      };
    case constant.Adduser_Error:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        isAdduser: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
export default AdduserReducer;