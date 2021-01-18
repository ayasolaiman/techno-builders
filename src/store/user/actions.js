import * as types from "./types";
import { put, takeEvery } from "redux-saga/effects";

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

const loginURL = "http://41.38.70.8:8003/api/method/login";

/** Sagas */
function* login(action) {
  try {
    const request = yield fetch(loginURL, {
      method: "POST",
      body: JSON.stringify(action.payload)
    });
    console.log("Login Request Result:", request);
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
