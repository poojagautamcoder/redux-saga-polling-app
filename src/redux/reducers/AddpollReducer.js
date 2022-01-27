import * as constant from "../constant/Constants";
const initialstate = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  isAddpoll: false,
};
const AddpollReducer = (state = initialstate, action) => {
  switch (action.type) {
    case constant.Addpoll_Request:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        isAddpoll: false,
      };
    case constant.Addpoll_Success:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        isAddpoll: true,
        response: action.payload.response,
      };
    case constant.Addpoll_Error:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        isAddpoll: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
export default AddpollReducer;
