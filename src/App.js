import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Components/Navigation';
import Terminal from './Components/Terminal';
import Landing from './Components/Landing';
import Skills from './Components/Skills';
import WorkExperience from './Components/WorkExperience';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Terminal /> */}
      <Landing />
      <Skills />
      <WorkExperience />
      <Portfolio />
    </div>
  );
}

export default App;
