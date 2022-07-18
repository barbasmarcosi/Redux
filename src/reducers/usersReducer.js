import * as types from '../types/usersTypes';

const INITIAL_STATE = {
  users: [],
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_ALL:
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

export default usersReducer;
