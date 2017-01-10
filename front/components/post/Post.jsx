import React from 'react';
//import LikeContainer from './LikeContainer.jsx'; from DEE
import CommentContainer from '../../containers/CommentContainer';

const Post = (props) => (
	<div>	
		<img src={props.post.img_path} />
		<CommentContainer id={props.post.id} />
	</div>
)

export default Post;

		// <LikeContainer id={props.post.id} />