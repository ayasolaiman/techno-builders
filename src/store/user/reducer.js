import * as types from "./types";

const INITIAL_STATE = {
  error: undefined,
  authed: false,
  userData: {
    userImg:
      "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg",
    name: "Candidate Full Name",
    email: "Candidate@techno-builder.com",
    dateOfBirth: "1 Jan 1990",
    phone: "012345678"
  }
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_USER_DATA:
      return {
        ...state,
        authed: true,
        userData: action.data
      };
    case types.CLEAR_DATA:
      return {
        ...state,
        authed: false
      };
    default:
      return state;
  }
}
