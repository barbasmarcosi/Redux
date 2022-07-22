import axios from "axios";
import {
  ERROR_PUBLICATIONS,
  LOADING_PUBLICATIONS,
  GET_ALL_PUBLICATIONS,
  GET_PUBLICATIONS_BY_KEY,
} from "../types/publicationsTypes";

import { GET_ALL_USERS } from "../types/usersTypes";

export const getAllPublications = () => async (dispatch) => {
  dispatch({
    type: LOADING_PUBLICATIONS,
  });
  try {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/posts"
    );
    dispatch({
      type: GET_ALL_PUBLICATIONS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_PUBLICATIONS,
      payload: err.message,
    });
  }
};

export const getPublicationByUserKey = (key) => async (dispatch, getState) => {
  dispatch({
    type: LOADING_PUBLICATIONS,
  });
  try {
    const { users } = getState().usersReducer;
    const userId = users[key].id;
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/posts/?userId=${userId}`
    );
    const updatedUsers = [...users];
    updatedUsers[key] = {
      ...users[key],
      publications: response.data,
    };
    dispatch({
      type: GET_ALL_USERS,
      payload: updatedUsers,
    });
    dispatch({
      type: GET_PUBLICATIONS_BY_KEY,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_PUBLICATIONS,
      payload: err.message,
    });
  }
  /*props.publications
          .filter((publication) => {
            return publication.userId === props.id;
          })
          .map((publication) => {
            return <li key={publication.id }>{publication.title}</li>;
          })}*/
};
