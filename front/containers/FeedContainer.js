import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPostsAsync} from '../actions/feed-actions';
import Post from '../components/post/Post';

const FeedContainer = React.createClass({
  componentDidMount(){
    this.props.getPosts()
  },
  render(){
    return (
      <ul className='postUl'>
        {
          this.props.posts.map((post, indx) => {
            return <li key={indx} className='postList'> <Post post={post} /> </li>
          })
        }
      </ul>
    )
  }
})

const mapStateToProps = (state) => {
  return {posts: state.feed.posts}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getPosts: getPostsAsync}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
