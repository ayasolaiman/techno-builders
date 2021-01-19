import * as types from "./types";
import axios from "axios";
import { put, takeEvery, call } from "redux-saga/effects";
//import avatar from "./../assets/images/avatar.png";

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

export function requestLogout() {
  return {
    type: types.LOGOUT_REQUEST
  };
}

export function clearData() {
  return {
    type: types.CLEAR_DATA
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
    //const loginData = action.payload;
    //const response = yield call(fetchLogin, loginData);
    //console.log("Login Request Result:", response);
    console.log("History:");
    //yield put(setUserData(data));
  } catch (error) {
    console.log("[LOGIN-REQUEST]- Catching Error:", error.message);
  }
}

function getUserData() {
  //call token request
}

function* logout() {
  console.log("Logging out!!");
  yield put(clearData());
}

export function* loginSideEffects() {
  yield takeEvery(types.LOGIN_REQUEST, login);
  yield takeEvery(types.LOGOUT_REQUEST, logout);
}
