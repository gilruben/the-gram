import {LOG_IN, LOG_IN_FAIL} from '../actions/login-actions';
import {VERIFY} from '../actions/verify-actions';

const defaultState = {id: null, username: '', email: '', bio: '', loginMsg: '', isVerified: false}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case LOG_IN:
      return Object.assign({}, state, action.data)
    case LOG_IN_FAIL:
      return Object.assign({}, state, action.data)
    case VERIFY:
      return Object.assign({}, state, action.data)
    default:
      return state;
  }
}

export default reducer;
