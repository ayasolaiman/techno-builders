import { all, call } from "redux-saga/effects";
import { categoriesSideEffects } from "./categories/actions";
import { productsSideEffects } from "./products/actions";
import cartSagas from "./cart/sagas";
import newsLetterSagas from "./newsLetter/sagas";

export default function* rootSaga() {
  yield all([]);
}
