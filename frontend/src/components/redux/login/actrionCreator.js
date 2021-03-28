import {
  POST_REGISTER_FAILURE,
  POST_REGISTER_SUCCESS,
  POST_REGISTER_REQUEST,
  POST_LOGIN_FAILURE,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_REQUEST,
} from "./actionType.js";

import axios from "axios";

export const postRegisterRequest = () => ({
  type: POST_REGISTER_REQUEST,
});
export const postRegisterSuccess = (payload) => ({
  type: POST_REGISTER_SUCCESS,
  payload,
});
export const postRegisterfailure = (payload) => ({
  type: POST_REGISTER_FAILURE,
  payload,
});

export const postUsersData = (payload) => (dispatch) => {
  console.log(payload);
  console.log(payload.mail);
  dispatch(postRegisterRequest());
  return axios({
    method: "POST",
    url: "http://localhost:5000/admin/register",
    data: {
      name: payload.nam,
      email: payload.mail,
      password: payload.pass,
    },
  })
    .then((res) => dispatch(postRegisterSuccess(res)))
    .catch((err) => dispatch(postRegisterfailure(err)));
};

export const postLoginRequest = () => ({
  type: POST_LOGIN_REQUEST,
});
export const postLoginSuccess = (payload) => ({
  type: POST_LOGIN_SUCCESS,
  payload,
});
export const postLoginfailure = (payload) => ({
  type: POST_LOGIN_FAILURE,
  payload,
});

export const postLoginData = (payload) => (dispatch) => {
  console.log(payload);
  console.log(payload.mail);
  dispatch(postLoginRequest());
  return axios({
    method: "POST",
    url: "http://localhost:5000/admin/login",
    data: {
      email: payload.mail,
      password: payload.pass,
    },
  })
    .then((res) => dispatch(postLoginSuccess(res)))
    .catch((err) => dispatch(postLoginfailure(err)));
};
