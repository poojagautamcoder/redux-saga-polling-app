import { put, call } from "@redux-saga/core/effects";
import {
  AddpollSuccess,
  AddpollError,
  DashboardRequest,
} from "../action/index";
import axios from "axios";

export function* AddPoll(action) {
  const { title, option } = action.payload;
  const url = `https://secure-refuge-14993.herokuapp.com/add_poll?title=${title}&options=${option.opt1}____${option.opt2}____${option.opt3}____${option.opt4}`;
  const apiCall = () => {
    return axios.get(url);
  };
  try {
    const response = yield call(axios.get, url);
    if (response) {
      yield put(AddpollSuccess({ response: response }));
    } else {
      yield put(AddpollError({ error: "Invalid details" }));
    }
  } catch (error) {
    console.log(error);
    yield put(AddpollError({ error: error }));
  }
}
