import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPostsAsync} from '../actions/like-actions';

const LikeContainer = React.createClass({
<<<<<<< HEAD
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

=======
  componentDidMount(){
    this.props.getLikes()
  },
  render(){
    return (
      <div>
          {this.props.likes.count}
      </div>
>>>>>>> master
    )
  }
})

<<<<<<< HEAD
export default LikeContainer;
=======
const mapStateToProps = (state) => {
  console.log(state.likes)
  return {likes: state.likes}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getLikes: getLikesAsync}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeContainer);
>>>>>>> master
