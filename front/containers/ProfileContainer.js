import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getUserPostsAsync} from '../actions/user-actions';
import ProfilePost from '../components/post/ProfilePost';

const ProfileContainer = React.createClass({
  componentDidMount(){
    this.props.getUserPosts()
  },
  render(){
    return (
      <div className='postGridDiv'>
        <ul className='postGrid'>
          {
            this.props.posts.map((post, indx) => {
              return <li key={indx} className='postList'> <ProfilePost post={post} /> </li>
            })
          }
        </ul>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {posts: state.user.posts}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getUserPosts: getUserPostsAsync}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
