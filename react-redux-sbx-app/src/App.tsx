import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxBasic from './Components/reduxBasic';
import ReduxToolkitBasic from './Components/reduxToolkitBasic';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ReduxBasic/>
        <ReduxToolkitBasic/>
      </header>
    </div>
  );
}

export default App;
