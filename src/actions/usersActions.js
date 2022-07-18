import axios from "axios";
import * as types from "../types/usersTypes";

export const getAll = () => async (dispatch) => {
  dispatch({
    type: types.LOADING,
  });
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({
      type: types.GET_ALL,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: types.ERROR,
      payload: err.message,
    });
  }
};
