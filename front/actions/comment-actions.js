import {ajax} from 'jquery';

export const GET_COMMENTS = 'GET_POSTS';

export const get_comments = (comment) = ({
  type: GET_COMMENTS,
  data: comments
}))

export const getCommentsAsync = (id) => (dispatch) => {
  ajax({
    url: '/api/comments/post/' + id,
    type: 'GET'
  })
}
