import { all, call } from "redux-saga/effects";
import { loginSideEffects } from "./user/actions";
export default function* rootSaga() {
  yield all([loginSideEffects()]);
}
