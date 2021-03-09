import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';

import Home from '../pages/home';
import Simulator from '../pages/simulator';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/simulator" component={Simulator} isPrivate />
  </Switch>
);

export default Routes;
