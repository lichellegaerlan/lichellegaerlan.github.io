import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Components/Navigation';
import Landing from './Components/Landing';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Landing />
    </div>
  );
}

export default App;
