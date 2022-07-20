import {
  ERROR_USERS,
  LOADING_USERS,
  GET_ALL_USERS,
  GET_USERS_BY_KEY,
} from "../types/usersTypes";

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: "",
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.payload, loading: false, error: "" };

    case GET_USERS_BY_KEY:
      return { ...state, users: action.payload, loading: false, error: "" };

    case LOADING_USERS:
      return { ...state, loading: true };

    case ERROR_USERS:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default usersReducer;
