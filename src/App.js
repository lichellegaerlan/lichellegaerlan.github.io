import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Components/Navigation';
import Landing from './Components/Landing';
import About from './Components/About';
import Skills from './Components/Skills';
import WorkExperience from './Components/WorkExperience';
import Portfolio from './Components/Portfolio';

function App() {
  const target = React.createRef();
  return (
    <div className="App">
      <Navigation />
      <Landing />
      <About />
      <Skills />
      <WorkExperience />
      <Portfolio />
    </div>
  );
}

export default App;
