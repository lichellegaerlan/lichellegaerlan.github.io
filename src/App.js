import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Components/Navigation';
import Terminal from './Components/Terminal';
import Landing from './Components/Landing';
import WorkExperience from './Components/WorkExperience';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Terminal />
      <Landing />
      <WorkExperience />
    </div>
  );
}

export default App;
