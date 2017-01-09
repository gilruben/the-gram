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
      <Navbar items={[{text: 'Home', url: '/'}, {text: 'Login', url: '/login'}]} />
      {props.children}
    </div> :
    <Login loginMsg={props.loginMsg} log_in={props.log_in} />
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