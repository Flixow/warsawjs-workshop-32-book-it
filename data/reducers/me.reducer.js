import {
  LOADING_STATES,
  PROFILE_GET_SUCCESS,
  PROFILE_PUT_SUCCESS,
} from 'data/constants';

const defaultState = {
  state: LOADING_STATES.INITIAL,
  profile: {},
};

export default function me(state = defaultState, action) {
  switch (action.type) {
    case PROFILE_GET_SUCCESS:
      return {
        ...state,
        state: LOADING_STATES.LOADED,
        profile: action.data,
      };
    case PROFILE_PUT_SUCCESS:
      return {
        ...state,
        state: LOADING_STATES.LOADED,
        profile: {
          ...state.profile,
          ...action.data,
        },
      };
    default:
      return state;
  }
}
