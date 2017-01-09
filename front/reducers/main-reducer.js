import {combineReducers} from 'redux';
import auth from './auth-reducer';

const mainReducer = combineReducers({
  auth
})

export default mainReducer;
