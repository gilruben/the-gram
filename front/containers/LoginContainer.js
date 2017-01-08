import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Login from '../components/login/Login';
import loginAsync from '../actions/login-actions';

const mapStateToProps = (state) => {
  return {loginMsg: state.loginMsg}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({log_in: loginAsync}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
