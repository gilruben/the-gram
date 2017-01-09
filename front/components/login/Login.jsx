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
      <div>
        Username:
        <input onChange={this.updateUserName} type="text"/>
        Password:
        <input onChange={this.updatePassword} type="text"/>
        <button onClick={this.submitLoginInfo}>Submit</button>
        <div>{loginMsg ? loginMsg : null}</div>
      </div>
    )
  }
});

export default Login;
