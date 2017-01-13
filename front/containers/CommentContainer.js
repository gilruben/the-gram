import React from 'react';
import {ajax} from 'jquery';
import IndividualComment from '../components/comment/IndividualComment';
import CreateComment from '../components/comment/CreateComment';

const CommentContainer = React.createClass({
  getInitialState() {
    return {
      commentList: []
    }
  },
  componentDidMount() {
    ajax({
      url: '/api/comments/post/' + this.props.id,
      type: 'GET'
    })
    .done((response) => {
      this.setState({commentList: response})
    })
  },
  handleSubmit(comment) {

    ajax({
      url: 'api/comments/',
      type: 'POST',
      data: {comment: comment, postId: this.props.id}
    })
    .done((newComment) => {
      let newList = this.state.commentList.slice();
      newList.push(newComment);

      this.setState({commentList: newList});
    })
  },
  render() {
    let poster = this.props.poster;
    let caption = this.props.caption;

    let captionComment = (
      <li>
        <div className="commentBox">
          <span className='commenters'>{poster}</span>
            <p>{caption}</p>
        </div>
      </li>
    )

    return (
      <div>
        <ul className='commentUl'>
          {caption ? captionComment : null}

          {
            this.state.commentList.map((comment, idx) => {

              return <li key={idx}><IndividualComment username={comment.user.username} comment={comment.comment} /></li>
            })
          }
        </ul>
        <CreateComment onSubmit={this.handleSubmit}/>
      </div>
    )
  }
})


export default CommentContainer
