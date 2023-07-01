import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxBasic from './Components/reduxBasic';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ReduxBasic/>
      </header>
    </div>
  );
}

export default App;
