import {
  PROFILE_GET_SUCCESS,
  PROFILE_PUT_SUCCESS,
} from 'data/constants';

export const getProfile = () => dispatch => {
  return dispatch({
    type: PROFILE_GET_SUCCESS,
    data: {
      id: 1,
      name: 'John Doe',
      age: 28,
      email: 'office@myHotel.com',
    },
  });
};

export const updateProfile = data => dispatch => {
  return dispatch({
    type: PROFILE_PUT_SUCCESS,
    data,
  });
};
