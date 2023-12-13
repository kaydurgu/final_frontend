import React from 'react';
import './App.css';
import CurrInput from './components/CurrInput';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {

  const [rates , setRates] = useState([]);
  useEffect(() => {
    axios.get('https://api.apilayer.com/fixer/latest?base=KGS&apikey=wTGSZhXWhsoMaTb7sMBijxO3w8YaufE8')
    .then(response => {
      setRates(response.data.rates);
    })
  }, [])
  return (
    <div className="App">
        <h1> Zhanbolot</h1>
        <CurrInput currencies={['USD']} amount={1} currency={'USD'} />
        <CurrInput currencies={['USD']} amount={1} currency={'USD'} /> 
    </div>
  );
}
export default App;
