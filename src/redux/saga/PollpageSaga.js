import { put, call } from "@redux-saga/core/effects";
import { VoteSuccess, VoteError } from "../action/index";
import axios from "axios";

export function* Vote(action) {
  console.log(action.payload, "action payload");
  //   const { id, option } = action.payload;
  const url = `https://secure-refuge-14993.herokuapp.com/do_vote?id=${id}&option_text=${option}`;
  const apiCall = () => {
    return axios.get(url);
  };
  try {
    let response = yield call(axios.get, url);
    if (response) {
      yield put(VoteSuccess({ response: response }));
    } else {
      yield put(VoteError({ error: "Invalid details" }));
    }
  } catch (error) {
    console.log(error, "error");
    yield put(VoteError({ error: error }));
  }
}
