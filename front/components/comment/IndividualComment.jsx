import React from 'react';

const IndividualComment = (props) => (
  <div className="commentBox">
    <span className='commenters'>{props.username}</span>
    <p>{props.comment}</p>
  </div>
)

export default IndividualComment;
