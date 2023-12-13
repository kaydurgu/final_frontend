import './App.css';
import React from 'react';
import CurrInput from './components/CurrInput';
function App() {
  return (
    <div className="App">
        <h1> Zhanbolot</h1>
        <CurrInput currencies={['USD']} amount={1} currency={'USD'} />
        <CurrInput currencies={['USD']} amount={1} currency={'USD'} /> 
    </div>
  );
}
export default App;
