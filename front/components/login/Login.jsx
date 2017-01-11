import React from 'react';

const Login = React.createClass({
  getInitialState() {
    return {username: '', password: ''};
  },
  submitLoginInfo() {
    this.props.log_in(this.state);
  },
  updateUserName(event) {
    this.setState({username: event.target.value});
  },
  updatePassword(event) {
    this.setState({password: event.target.value});
  },
  render() {
    let loginMsg = this.props.loginMsg;

    return (
      <div className="mainLogin">
        <div className="loginDiv">
          <h1>instagram</h1>
          <div className="inputDiv">
            <input onChange={this.updateUserName} placeholder="Username" type="text"/>
            <input onChange={this.updatePassword} placeholder="Password" type="password"/>
            <button onClick={this.submitLoginInfo}>Log in</button>
          </div>
          <div>{loginMsg ? loginMsg : null}</div>
        </div>
      </div>
    )
  }
});

export default Login;
