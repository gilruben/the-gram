import React from 'react';

const LikeContainer = React.createClass({
  getInitialState(){
    return {likes: 0, wasLiked: false}
  },
  componentDidMount(){
    $.ajax({
      url: '/api/likes',
      type: 'GET'
    })
    .done((data) => {
      this.setState({likes: data})
    })
  },
  likePost(){
    this.setState({likes: this.state.likes + 1, wasLiked: true});
  },
  unlikePost(){
    this.setState({likes: this.state.likes - 1, wasLiked: false});
  }
  render(){
    return (
      <div onClick={likePost}>
        {this.state.likes}
      </div>
    )
  }
})

export default LikeContainer;
