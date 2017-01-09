import {combineReducers} from 'redux';
import auth from './auth-reducer';
import user from './user-reducer';
import feed from './feed-reducer';

const mainReducer = combineReducers({
  auth,
  user,
  feed
})

export default mainReducer;
