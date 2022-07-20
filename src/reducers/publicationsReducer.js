import {
  ERROR_PUBLICATIONS,
  LOADING_PUBLICATIONS,
  GET_ALL_PUBLICATIONS,
  GET_PUBLICATIONS_BY_KEY,
} from "../types/publicationsTypes";

const INITIAL_STATE = {
  publications: [],
  loading: false,
  error: "",
};

const publicationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PUBLICATIONS:
      return {
        ...state,
        publications: action.payload,
        loading: false,
        error: "",
      };

    case GET_PUBLICATIONS_BY_KEY:
      return {
        ...state,
        publications: action.payload,
        loading: false,
        error: "",
      };

    case LOADING_PUBLICATIONS:
      return { ...state, loading: true };

    case ERROR_PUBLICATIONS:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default publicationsReducer;
