import * as types from "./types";
import { put, takeEvery } from "redux-saga/effects";

/** Actions */
export function requestLogin() {
  return {
    type: types.LOGIN_REQUEST
  };
}

export function setUserData(data) {
  return {
    type: types.SET_USER_DATA,
    data
  };
}

/** Sagas */
function* login() {
  console.log("User Data:");
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
