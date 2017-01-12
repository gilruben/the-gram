import React from 'react';

const GridPost = (props) => (
	<div className="postBox">
		<p className='posterName'>{props.post.user.username}</p>
		<img src={props.post.img_path} />
	</div>
)

export default GridPost;
