import {combineReducers} from 'redux';
import auth from './auth-reducer';
import user from './user-reducer';

const mainReducer = combineReducers({
  auth,
  user
})

export default mainReducer;
