import * as constant from "../constant/Constants";
const initialstate = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  isAdduser: false,
};
const AddpollReducer = (state = initialstate, action) => {
  console.log(action, "action");
  switch (action.type) {
    case constant.Addpoll_Request:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        isAdduser: false,
      };
    case constant.Addpoll_Success:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        isAdduser: true,
        response: action.payload.response,
      };
    case constant.Addpoll_Error:
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
export default AddpollReducer;