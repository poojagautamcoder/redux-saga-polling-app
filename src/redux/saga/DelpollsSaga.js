import { put, call } from "@redux-saga/core/effects";
import {
  DelpollsSuccess,
  DelpollsError,
  DashboardRequest,
} from "../action/index";
import axios from "axios";

export function* deletePoll(action) {
  const { id } = action.payload;

  const url = `https://secure-refuge-14993.herokuapp.com/delete_poll?id=${id}`;
  const apiCall = () => {
    return axios.get(url);
  };
  try {
    let response = yield call(axios.get, url);

    if (response) {
      yield put(DelpollsSuccess({ response: response }));
      yield put(DashboardRequest());
    } else {
      yield put(DelpollsError({ error: "Invalid details" }));
    }
  } catch (error) {
    yield put(DelpollsError({ error: error }));
  }
}
