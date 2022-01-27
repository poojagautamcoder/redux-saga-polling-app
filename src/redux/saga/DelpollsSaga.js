import { put, call } from "@redux-saga/core/effects";
import {
  DelpollsSuccess,
  DelpollsError,
  DashboardRequest,
} from "../action/index";
import axios from "axios";

export function* deletePoll(action) {
  const { id } = action.payload;
  console.log(id, "pollid")
  const url = `https://secure-refuge-14993.herokuapp.com/delete_poll?id=${id}`;
  const apiCall = () => {
    return axios.get(url);
  };
  try {
    let response = yield call(axios.get, url);

    console.log(action.payload.id, "array");
    if (response) {
      console.log(response);
      yield put(DelpollsSuccess({ response: response }));
      yield put(DashboardRequest());
    } else {
      yield put(DelpollsError({ error: "Invalid details" }));
    }
  } catch (error) {
    console.log(error);
    yield put(DelpollsError({ error: error }));
  }
}
