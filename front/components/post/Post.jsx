import React from 'react';
//import LikeContainer from './LikeContainer.jsx'; from DEE
//import CommentContainer from './CommentContainer.jsx'; from CARMAR

const Post = (props) => (
	<div>	
		<img src={props.post.img_path} />
		<LikeContainer id={props.post.id} />
		<CommentContainer id={props.post.id} />
	</div>
)

export default Post;