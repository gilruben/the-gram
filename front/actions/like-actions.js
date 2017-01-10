import $ from 'jquery';

export const GET_LIKES = 'GET_LIKES';

export const get_likes = (likes) => ({
  type: GET_LIKES,
  data: likes
})

export const getLikesAsync = () => (dispatch) => {
  $.ajax({
    url: '/api/likes',
    type: 'GET'
  })
  .done((data) => {
    dispatch(get_likes({likes: data}))
  })
}
