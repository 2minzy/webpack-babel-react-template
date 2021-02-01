import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

const App = () => (
  <div>
    <h1>{_.join(['Hello', 'Minji'], ', ')}</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
