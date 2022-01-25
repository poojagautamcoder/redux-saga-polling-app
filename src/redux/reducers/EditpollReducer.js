import * as constant from "../constant/Constants";
const initialstate = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: [],
};

const EditpollReducer = (state = initialstate, action) => {
  switch (action.type) {
    case constant.Editpoll_Request:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };

    case constant.Editpoll_Success:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload.response,
      };

    case constant.Editpoll_Error:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default EditpollReducer;
