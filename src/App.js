import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Components/Navigation';
import Landing from './Components/Landing';
import WorkExperience from './Components/WorkExperience';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Landing />
      <WorkExperience />
    </div>
  );
}

export default App;
