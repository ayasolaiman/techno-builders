import * as types from "./types";

const INITIAL_STATE = {
  error: undefined,
  authed: false,
  userData: {}
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_USER_DATA:
      return {
        ...state,
        userData: action.data,
        authed: true
      };
    default:
      return state;
  }
}
