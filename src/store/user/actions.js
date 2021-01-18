import * as types from "./types";
import axios from "axios";
import { put, takeEvery, call } from "redux-saga/effects";

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
  } catch (error) {
    console.log("[LOGIN-REQUEST]- Catching Error:", error.message);
  }
}

function* getUserData() {
  try {
    const products = yield axiosInstance.get("/products");
    const { total_count, items_per_page } = products.data.pagination_meta;
    const totalPages = Math.ceil(total_count / items_per_page);
    const data = {
      allProducts: products.data.products,
      pagination_meta: {
        totalPages: totalPages,
        totalItems: total_count,
        pageLimit: items_per_page
      }
    };
    yield put(setAllProducts(data));
  } catch (error) {
    console.log("[ALL-PRODUCTS-REQUEST]- Catching Error:", error.message);
  }
}

export function* loginSideEffects() {
  yield takeEvery(types.LOGIN_REQUEST, login);
}
