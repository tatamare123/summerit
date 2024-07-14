//import React from 'react';
import './App.css';
import RandomColor from './RandomColor';
import ColorButtonArray from './ColorButtonArray';
import ColorButton from './ColorButton';
import LocationData from './LocationData';
import CatData from './CatData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <RandomColor />
          <ColorButton color="green" text="Change Background to Green" />
          <ColorButtonArray />
        </div>
        <LocationData />
        <CatData />
      </header>
    </div>
  );
}

export default App;
