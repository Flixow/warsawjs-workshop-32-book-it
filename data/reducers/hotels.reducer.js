import {
  LOADING_STATES,
  HOTELS_GET_REQUEST,
  HOTELS_GET_SUCCESS,
  HOTELS_GET_FAILURE,
} from 'data/constants';

const defaultState = {
  state: LOADING_STATES.INITIAL,
  list: [],
  error: null,
};

export default function hotels(state = defaultState, action) {
  switch (action.type) {
    case HOTELS_GET_REQUEST:
      return {
        ...state,
        state: LOADING_STATES.LOADING,
        list: [],
      };
    case HOTELS_GET_SUCCESS:
      return {
        ...state,
        state: LOADING_STATES.LOADED,
        list: action.req,
      };
    case HOTELS_GET_FAILURE:
      return {
        ...state,
        state: LOADING_STATES.FAILED,
        error: action.error,
      };
    default:
      return state;
  }
}
