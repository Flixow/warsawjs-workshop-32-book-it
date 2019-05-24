import { combineReducers } from 'redux';

import general from './general.reducer';
import hotels from './hotels.reducer';

const rootReducer = combineReducers({
  general,
  hotels,
});

export default rootReducer;
