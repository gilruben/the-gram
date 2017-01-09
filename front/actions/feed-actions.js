import $ from 'jquery';

export const GET_POSTS = 'GET_POSTS';

export const get_posts = (posts) => ({
  type: GET_POSTS,
  data: posts
})

export const getPostsAsync = () => (dispatch) => {
  $.ajax({
    url: '/api/posts',
    type: 'GET'
  })
  .done((data) => {
    dispatch(get_posts({posts: data}))
  })
}
