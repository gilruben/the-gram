import React from 'react';

const IndividualComment = (props) => (
  <div className="commentBox">
    <p><span className='commenters'>{props.username}</span>{props.comment}</p>
  </div>
)

export default IndividualComment;
