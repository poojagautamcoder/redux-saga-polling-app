import { put, call } from "@redux-saga/core/effects";
import { DashboardSuccess, DashboardError } from "../action/index";
import axios from "axios";

export function* allPolls(action) {
  const url = `https://secure-refuge-14993.herokuapp.com/list_polls`;
  const apiCall = () => {
    return axios.get(url);
  };
  try {
    const response = yield call(axios.get, url);
    if (response && response.data && response.data.data) {
      yield put(DashboardSuccess({ response: response.data.data }));
    } else {
      yield put(DashboardError({ error: "Invalid details" }));
    }
  } catch (error) {
    yield put(DashboardError({ error: error }));
  }
}
