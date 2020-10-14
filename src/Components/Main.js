import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing.js';
import About from './About.js';

export default () => {
  return (
    <main>
      <Switch>
        <Route exact path="/home" component={Landing} />
        <Route exact path="/about" component={About} />
      </Switch>
    </main>
  );
};
