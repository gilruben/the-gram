import React from 'react';
import {Navbar} from '../index';

const App = React.createClass({
  render() {
    return (
      <div>
        <Navbar items={[{text: 'Home', url: '/'}, {text: 'Login', url: '/login'}]} />
      </div>
    )
  }
});

export default App;
