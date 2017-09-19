import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router';

import App from './App';
import Eggs from './eggs/Eggs';

const Routes = (props) => (
  <BrowserRouter {...props}>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/eggs" component={Eggs} />
    </div>
  </BrowserRouter>
);

export default Routes;