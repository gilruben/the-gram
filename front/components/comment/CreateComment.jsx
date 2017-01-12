import React from 'react';
import commentLike from '../../icons/commentLike.png';
import igSprites from '../../icons/igSprites.png';

//show the input and button horizontal

const CreateComment = React.createClass({
	getInitialState() {
		return {isLiked: false}
	},

	handleClick(){
		let isLiked = this.state.isLiked

		this.setState({isLiked: isLiked ? false : true})
	},

	render(){
	  return( 
	    <div>
		    <div className='commentCreate'>
		    	{
		    		this.state.isLiked ?
		    		  <span onClick={this.handleClick} className='igSpriteHeartLike'>Like</span> :
		    		  <span onClick={this.handleClick} className='igSpriteHeartOpen'>Like</span>
		    	}

			    <input className='commentInput' type="input" placeholder="Add a comment..." />
			    <button className='commentSubmit' type="submit">Send</button>
		    </div> 
		  </div>
		)
	}
 })


export default CreateComment;
