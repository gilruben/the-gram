import React from 'react';
import commentLike from '../../icons/commentLike.png';
import igSprites from '../../icons/igSprites.png';

//show the input and button horizontal

const CreateComment = React.createClass({
  getInitialState(){
    return {input: '', isLiked: false}
  },
  handleChange(e){
    this.setState({
      input: e.target.value
    })
  },
  handleClick(){
		let isLiked = this.state.isLiked

		this.setState({isLiked: isLiked ? false : true})
	},
  handleSubmit(e){
    e.preventDefault();
    let input = this.state.input;

    this.setState({input: ''})

    this.props.onSubmit(input);
  },
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='commentCreate'>
          {
            this.state.isLiked ?
            <span onClick={this.handleClick} className='igSpriteHeartLike'>Like</span> :
            <span onClick={this.handleClick} className='igSpriteHeartOpen'>Like</span>
          }
          <input className='commentInput' onChange={this.handleChange} type="input" placeholder="Add a comment..." value={this.state.input}/>
          <button className='commentSubmit' type="submit">Send</button>
        </form>
      </div>
    )
  }})

export default CreateComment;
