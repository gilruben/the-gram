import React from 'react';
//import LikeContainer from './LikeContainer.jsx'; from DEE
import CommentContainer from '../../containers/CommentContainer';

const Post = (props) => (
	<div className="postBox">
		<p className='posterName'>{props.post.user.username}</p>
		<img src={props.post.img_path} />
		<CommentContainer id={props.post.id} poster={props.post.user.username} caption={props.post.caption}/>
	</div>
)

export default Post;

		// <LikeContainer id={props.post.id} />
