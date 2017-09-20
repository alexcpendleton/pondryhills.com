import React from 'react';
import ReactDOM from 'react-dom';
import Eggs from './Eggs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Eggs />, div);
});
