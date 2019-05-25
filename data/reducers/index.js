import { combineReducers } from 'redux';

import general from './general.reducer';
import hotels from './hotels.reducer';
import me from './me.reducer';

const rootReducer = combineReducers({
  general,
  hotels,
  me,
});

export default rootReducer;
