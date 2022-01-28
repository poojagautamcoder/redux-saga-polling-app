import * as constant from "../constant/Constants";
const initialstate = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  ispoll: false,
};
const PollpageReducer = (state = initialstate, action) => {
  switch (action.type) {
    case constant.Vote_Request:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        ispoll: false,
      };
    case constant.Vote_Success:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        ispoll: true,
        response: action.payload.response,
      };
    case constant.Vote_Error:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        ispoll: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
export default PollpageReducer;
