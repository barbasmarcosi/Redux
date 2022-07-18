import axios from "axios";
import * as types from '../types/usersTypes'

export const getAll = () => async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  dispatch({
    type: types.GET_ALL,
    payload: response.data,
  });
};
