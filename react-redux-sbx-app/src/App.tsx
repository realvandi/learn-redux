import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxBasic from './Components/Basic/reduxBasic';
import ReduxToolkitBasic from './Components/Basic/reduxToolkitBasic';
import CounterSliceApp from './Components/Counter/counterSliceApp';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{}}>
        R E D U X
        <CounterSliceApp/>
      </header>
    </div>
  );
}

export default App;
