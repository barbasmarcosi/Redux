import * as types from "../types/usersTypes";

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: "",
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_ALL:
      return { ...state, users: action.payload, loading: false };

    case types.LOADING:
      return { ...state, loading: true };

    case types.ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default usersReducer;
