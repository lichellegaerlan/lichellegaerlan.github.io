import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Landing from './Components/Landing';
import About from './Components/About';
import Skills from './Components/Skills';
import WorkExperience from './Components/WorkExperience';
import Portfolio from './Components/Portfolio';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const target = React.createRef();
  return (
    <Router>
      <div className="App">
        {/* <Navigation /> */}
        <Header />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/about" component={About} />

          {/* combined skills and experience pages underneath the /experience route */}
          <Route path="/experience" component={Skills} />
          {/* <Route path="/experience" component={WorkExperience} /> */}

          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
