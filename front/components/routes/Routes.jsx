import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {App, Home, Login} from '../index';
import CounterContainer from '../../container/Counter-Container';
import {Provider} from 'react-redux';
import store from '../../store/store';

const Routes = (props) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} >
        <IndexRoute component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/counter' component={CounterContainer} />
      </Route>
    </Router>
  </Provider>
);

export default Routes;
