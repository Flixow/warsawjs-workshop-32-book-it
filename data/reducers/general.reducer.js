import {
  LOADING_STATES,
} from 'data/constants';

const defaultState = {
  state: LOADING_STATES.INITIAL,
};

export default function general(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
