import {
  HOTELS_GET,
} from 'data/constants';

import fetch from 'data/core/fetch';

export const fetchHotels = () => dispatch => {
  const promise = fetch('/hotels');

  return dispatch({
    type: HOTELS_GET,
    promise,
  });
};
