import $ from 'jquery';
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
export const UPDATE_USER_POSTS = 'UPDATE_USER_POSTS';

export const update_user_data = (userData) => ({
  type: UPDATE_USER_DATA,
  data: userData
})

export const update_user_posts = (posts) => ({
  type: UPDATE_USER_POSTS,
  data: posts
})

export const getUserPostsAsync = () => (dispatch) => {
  $.ajax({
    url: '/api/posts/user',
    type: 'GET'
  })
  .done((data) => {
    dispatch(update_user_posts({posts: data}))
  })
}
