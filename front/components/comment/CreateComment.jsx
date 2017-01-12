import React from 'react';
import commentLike from '../../icons/commentLike.png';
import igSprites from '../../icons/igSprites.png';

//show the input and button horizontal

const CreateComment = (props) => (
  <div>
    <div className='commentCreate'>
    	<span className='igSpriteHeartOpen'>Like</span>
	      <input className='commentInput' type="input" placeholder="Add a comment...">
	      </input>
	      <button type="submit">Send</button>
    </div> 

  </div>
)

export default CreateComment;
