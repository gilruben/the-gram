import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
<<<<<<< HEAD
import {App, Home, Login} from '../index';
import CounterContainer from '../../container/Counter-Container';
import {Provider} from 'react-redux';
=======
import {App, Home} from '../index';
import LoginContainer from '../../containers/LoginContainer';
>>>>>>> e72186efd6e3d44ebd85faa193cfe618984c929d
import store from '../../store/store';

const Routes = (props) => (
  <Provider store={store}>
    <Router history={browserHistory}>
<<<<<<< HEAD
      <Route path='/' component={App} >
        <IndexRoute component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/counter' component={CounterContainer} />
=======
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/login' component={LoginContainer} />
>>>>>>> e72186efd6e3d44ebd85faa193cfe618984c929d
      </Route>
    </Router>
  </Provider>
);

export default Routes;
