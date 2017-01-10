import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Home} from '../index';
import LoginOrFeed from '../../containers/LoginOrFeed';
import FeedContainer from '../../containers/FeedContainer';
import store from '../../store/store';
import {verifyUser} from '../../route-utils';

const Routes = (props) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={LoginOrFeed} onEnter={verifyUser}>
        <IndexRoute component={FeedContainer} />
      </Route>
    </Router>
  </Provider>
);

export default Routes;
