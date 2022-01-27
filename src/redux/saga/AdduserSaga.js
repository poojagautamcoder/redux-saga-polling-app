import { put, call } from "@redux-saga/core/effects";
import { AdduserSuccess, AdduserError } from "../action/index";
import axios from "axios";

export function* AddPoll(action) {
  try {
    const response = yield call(axios.get, url);

    console.log(action.payload.id, "array");
    if (response) {
      console.log(response);
      yield put(AdduserSuccess({ response: response }));
    } else {
      yield put(AdduserError({ error: "Invalid details" }));
    }
  } catch (error) {
    console.log(error);
    yield put(AdduserError({ error: error }));
  }
}
