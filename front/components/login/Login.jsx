import React from 'react';
import $ from 'jquery';

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
    return (
      <div>
        Username:
        <input onChange={this.updateUserName} type="text"/>
        Password:
        <input onChange={this.updatePassword} type="text"/>
        <button onClick={this.submitLoginInfo}>Submit</button>
      </div>
    )
  }
});

export default Login;
