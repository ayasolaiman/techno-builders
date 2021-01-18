import * as types from "./types";
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
async function fetchLogin(action) {
  try {
    const loginData = action.payload;
    const request = await fetch("http://41.38.70.8:8003/api/method/login", {
      method: "POST",
      body: loginData
    });
    console.log("Fetch result:", request);
  } catch (err) {
    console.log("[LOGIN-REQUEST]- Catching Error:", error);
    return err;
  }
}
/** Sagas */
function* login(action) {
  try {
    console.log("action payload:", action.payload);
    const response = yield call();
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
