import {
  HOTELS_GET,
} from 'data/constants';

import fetch from 'data/core/fetch';

export const fetchHotels = ({ query }) => dispatch => {
  const promise = fetch('/hotels', {
    params: {
      title: query.searched_phrase,
    },
  });

  return dispatch({
    type: HOTELS_GET,
    promise,
  });
};
