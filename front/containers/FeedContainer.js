import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPostsAsync} from '../actions/feed-actions';

const FeedContainer = React.createClass({
  componentDidMount(){
    this.props.getPosts()
  },
  render(){
    return (
      <ul>
        {
          this.props.posts.map((post, indx) => {
            return <li key={indx}>{post.caption}</li>
          })
        }
      </ul>
    )
  }
})

const mapStateToProps = (state) => {
  console.log(state.feed.posts)
  return {posts: state.feed.posts}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getPosts: getPostsAsync}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
