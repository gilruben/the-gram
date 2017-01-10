import {UPDATE_USER_DATA} from '../actions/user-actions';

const defaultState = {id: null, username: '', email: '', bio: ''}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case UPDATE_USER_DATA:
      console.log(action.data)
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}

export default reducer;
