import { put, call } from "@redux-saga/core/effects";
import {
  AddoptionSuccess,
  AddoptionError,
  EditpollRequest,
} from "../action/index";
import axios from "axios";

export function* addoption(action) {
  console.log(action.payload, "action payload");
  const { id, option } = action.payload;
  const url = `https://secure-refuge-14993.herokuapp.com/add_new_option?id=${id}option_text=${option}`;
  const apiCall = () => {
    return axios.get(url);
  };
  try {
    let response = yield call(axios.get, url);

    if (response) {
      yield put(AddoptionSuccess({ response: response }));
      yield put(EditpollRequest());
    } else {
      yield put(AddoptionError({ error: "Invalid details" }));
    }
  } catch (error) {
    console.log(error, "error");
    yield put(AddoptionError({ error: error }));
  }
}
