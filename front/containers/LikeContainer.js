import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPostsAsync} from '../actions/like-actions';

const LikeContainer = React.createClass({
  componentDidMount(){
    this.props.getLikes()
  },
  render(){
    return (
      <ul>
          {this.props.likes.count}
        }
      </ul>
    )
  }
})

const mapStateToProps = (state) => {
  console.log(state.likes)
  return {likes: state.likes}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getLikes: getLikesAsync}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeContainer);
