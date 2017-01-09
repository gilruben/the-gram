import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {App, Home} from '../index';
import LoginContainer from '../../containers/LoginContainer';
import store from '../../store/store';
import {verify, verifySignedIn} from '../../route-utils';

const Routes = (props) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <IndexRoute component={Home} />
      <Route path='/login' component={LoginContainer} onEnter={verifySignedIn} />
      <Route path='/' component={App} onEnter={verify}>
      </Route>
    </Router>
  </Provider>
);

export default Routes;
