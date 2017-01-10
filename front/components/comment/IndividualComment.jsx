import React from 'react';

const IndividualComment = (props) => (
  <div>
    <span>{props.username}</span>
    <p>{props.comment}</p>
  </div>
)

export default IndividualComment;
