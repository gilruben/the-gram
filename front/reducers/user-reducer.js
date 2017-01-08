import {UPDATE_USER_DATA} from '../actions/user-actions';

const defaultState = {id: null, username: '', email: '', bio: ''}

const reducer = (state = defaultState, action) => {
  switch(action) {
    case UPDATE_USER_DATA:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}

export default reducer;
