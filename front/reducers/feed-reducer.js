import {GET_POSTS} from '../actions/feed-actions';

const defaultState = {posts: []}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case GET_POSTS:
      return Object.assign({}, state, action.data)
    default:
      return state;
  }
}

export default reducer;
