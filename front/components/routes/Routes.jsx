import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {App, Home} from '../index';
import LoginContainer from '../../containers/LoginContainer';
import store from '../../store/store';

const Routes = (props) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/login' component={LoginContainer} />
      </Route>
    </Router>
  </Provider>
);

export default Routes;
