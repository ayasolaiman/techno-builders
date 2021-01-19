import * as types from "./types";
import axios from "axios";
import { put, takeEvery, call } from "redux-saga/effects";
import avatar from "./../assets/images/avatar.png";

/** Actions */
export function requestLogin(values) {
  return {
    type: types.LOGIN_REQUEST,
    payload: values
  };
}

export function setUserData(data) {
  return {
    type: types.SET_USER_DATA,
    data
  };
}

/** Fetching */
async function fetchLogin(loginData) {
  try {
    const request = await axios.post(
      "http://41.38.70.8:8003/api/method/login",
      {
        usr: loginData.email,
        pwd: loginData.password
      }
    );
    console.log("Request Result:", request);
  } catch (err) {
    console.log("[FETCH-REQUEST]- Catching Error:", err.message);
  }
}

/** Sagas */
function* login(action) {
  try {
    const loginData = action.payload;
    const response = yield call(fetchLogin, loginData);
    console.log("Login Request Result:", response);
    //Mocking login scenario
    let status = "OK";
    if (status === "OK") {
      const data = getUserData();
      console.log("User Data:", data);
      yield put(setUserData(data));
    }
  } catch (error) {
    console.log("[LOGIN-REQUEST]- Catching Error:", error.message);
  }
}

function getUserData() {
  const data = {
    userImg: "",
    name: "Candidate Full Name",
    email: "Candidate@techno-builder.com",
    dateOfBirth: "1 Jan 1990",
    phone: "012345678"
  };
  return data;
}

export function* loginSideEffects() {
  yield takeEvery(types.LOGIN_REQUEST, login);
}
