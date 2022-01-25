import { put, call } from "@redux-saga/core/effects";
import { EditpollSuccess, EditpollError } from "../action/index";
import axios from "axios";

export function* editPoll(action) {
  const { id, title } = action.payload;
  console.log(action.payload, "id");
  const url = `https://secure-refuge-14993.herokuapp.com/update_poll_title?id=${id}&title=${title}`;
  const apiCall = () => {
    return axios.get(url);
  };
  try {
    const response = yield call(axios.get, url);
    if (response && response.data && response.data.data) {
      yield put(EditpollSuccess({ response: response.data.data }));
    } else {
      yield put(EditpollError({ error: "Invalid details" }));
    }
  } catch (error) {
    yield put(EditpollError({ error: error }));
  }
}
