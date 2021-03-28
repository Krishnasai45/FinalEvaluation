import {
  POST_REGISTER_FAILURE,
  POST_REGISTER_SUCCESS,
  POST_REGISTER_REQUEST,
  POST_LOGIN_FAILURE,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_REQUEST,
} from "./actionType.js";

const initState = {
  isLogin: false,
  isRegister: false,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case POST_REGISTER_REQUEST:
      return {
        ...state,
      };
    case POST_REGISTER_SUCCESS:
      return {
        ...state,
        isRegister: true,
      };
    case POST_REGISTER_FAILURE:
      return {
        ...state,
        isRegister: false,
      };
    case POST_LOGIN_REQUEST:
      return {
        ...state,
      };
    case POST_LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
      };
    case POST_LOGIN_FAILURE:
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
};
export default reducer;
