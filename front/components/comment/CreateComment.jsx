import React from 'react';
import commentLike from '../../icons/commentLike.png';
import igSprites from '../../icons/igSprites.png';

//show the input and button horizontal

const CreateComment = React.createClass({
  getInitialState(){
    return {input: ''}
  },
  handleChange(e){
    this.setState({
      input: e.target.value
    })
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
          <span className='igSpriteHeartOpen'>Like</span>
          <input className='commentInput' onChange={this.handleChange} type="input" placeholder="Add a comment..." value={this.state.input}/>
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
})

export default CreateComment;
