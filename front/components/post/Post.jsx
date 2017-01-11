import React from 'react';
//import LikeContainer from './LikeContainer.jsx'; from DEE
import CommentContainer from '../../containers/CommentContainer';

const Post = (props) => (
	<div className="postBox">
		<img src={props.post.img_path} />
		<p>{props.post.caption}</p>
		<CommentContainer id={props.post.id} />
	</div>
)

export default Post;

		// <LikeContainer id={props.post.id} />
