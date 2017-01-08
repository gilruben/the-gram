import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {App, Home} from '../index';
import LoginOrFeed from '../../containers/LoginOrFeed';
import store from '../../store/store';
import {verifyUser} from '../../route-utils';

const Routes = (props) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={LoginOrFeed} onEnter={verifyUser}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>
);

export default Routes;
