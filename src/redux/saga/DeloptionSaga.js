import { put, call } from "@redux-saga/core/effects";
import {
  DelpoloptSuccess,
  DelpoloptError,
  EditpollRequest,
} from "../action/index";
import axios from "axios";

export function* deleteoption(action) {
  const { id, optionText } = action.payload;
  const url = `https://secure-refuge-14993.herokuapp.com/delete_poll_option?id=${id}&option_text=${optionText}`;
  const apiCall = () => {
    return axios.get(url);
  };
  try {
    let response = yield call(axios.get, url);

    if (response) {
      yield put(DelpoloptSuccess({ response: response }));
      yield put(EditpollRequest());
    } else {
      yield put(DelpoloptError({ error: "Invalid details" }));
    }
  } catch (error) {
    yield put(DelpoloptError({ error: error }));
  }
}
