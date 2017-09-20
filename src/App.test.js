import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </BrowserRouter>, div);
});
