import axios from "axios";
import { ERROR_USERS, LOADING_USERS, GET_ALL_USERS, GET_USERS_BY_KEY } from "../types/usersTypes";

export const getAllUsers = () => async (dispatch) => {
  dispatch({
    type: LOADING_USERS,
  });
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({
      type: GET_ALL_USERS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_USERS,
      payload: err.message,
    });
  }
};

export const getUserByKey = (key) => async (dispatch) => {
  dispatch({
    type: LOADING_USERS,
  });
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${Number(key)+1}`
    );
    dispatch({
      type: GET_USERS_BY_KEY,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_USERS,
      payload: err.message,
    });
  }
};
