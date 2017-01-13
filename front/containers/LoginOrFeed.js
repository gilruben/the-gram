import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Navbar, Login} from '../components/index';
import {loginAsync} from '../actions/login-actions';

//Displays Login component if user is not logged in, else displays the
//user's post feed
const LoginOrFeed = (props) => (
  (props.isVerified || props.params.username) ?
    <div>
      <Navbar items={[{text: 'profile', url: '/profile', icon: 'fa fa-user'}, {text: 'create post', url: '/newpost', icon: 'fa fa-plus'}]} />
      {props.children}
    </div> :
    <div className="loginContainer">
      <div>
        <img src="https://lh6.googleusercontent.com/bIMHjQTnQy1wHccZEGeYGMh7AY6nVisaL-z94LCDeYsuoNPEa52zF2QehBSsSAwDf72DaqGp9BTESbU=w2400-h1854-rw" />
      </div>
      <Login loginMsg={props.loginMsg} log_in={props.log_in} />
    </div>
)

const mapStateToProps = (state) => {
  let authState = state.auth;

  return {
    loginMsg: authState.loginMsg,
    isVerified: authState.isVerified
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({log_in: loginAsync}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginOrFeed);
