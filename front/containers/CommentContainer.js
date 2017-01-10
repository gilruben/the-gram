import React from 'react';
import {ajax} from 'jquery';
import IndividualComment from '../components/comment/IndividualComment';

const CommentContainer = React.createClass({
  getIntitialState() {
    return {
      commentList: []
    }
  },
  componentDidMount() {
    ajax({
      url: '/api/comments/posts/' + this.props.id,
      type: 'GET'
    })
    .done((response) => {
      this.setState({
        commentList: response
      })
    })
  },
  render() {
    return (
      <div>
        <ul>
          {
            this.state.commentList.map((comment, idx) => {
              return <li key={idx}><IndividualComment username={comment.user.username} content={comment.content} /></li>
            })
          }
        </ul>
      </div>
    )
  }
})

export default CommentContainer
