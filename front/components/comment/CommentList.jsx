import React from 'react';
import {ajax} from 'jquery';

import IndividualComment from './IndividualComment';

const CommentList = React.createClass({
  getInitialState () {
    return {
      commentsList: []
    }
  },
  componentDidMount () {
    var that = this;
    ajax({
      url: '/api/comments/post/' ,
      type: 'GET'
    })
  },
  render () {
    return (
      <div>
        <ul>
          {/* This is the comment list page. */}
          {
            this.props.comments.map((comment, idx) => {
              return <li key={idx}><IndividualComment /></li>
            })
          }
        </ul>
      </div>
    )
  }
})

export default CommentList;
