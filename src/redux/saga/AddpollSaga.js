import { put, call } from "@redux-saga/core/effects";
import { AddpollSuccess, AddpollError } from "../action/index";
import axios from "axios";

export function* AddPoll(action) {
  const { title, newoption } = action.payload;
  console.log(id, "pollid");
  const url = `https://secure-refuge-14993.herokuapp.com/add_poll?title=${title}&options=${newoption}`;
  const apiCall = () => {
    return axios.get(url);
  };
  try {
    const response = yield call(axios.get, url);

    console.log(action.payload.id, "array");
    if (response) {
      console.log(response);
      yield put(AddpollSuccess({ response: response }));
    } else {
      yield put(AddpollError({ error: "Invalid details" }));
    }
  } catch (error) {
    console.log(error);
    yield put(AddpollError({ error: error }));
  }
}
