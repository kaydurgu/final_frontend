import React from 'react';
import './App.css';
import CurrInput from './components/CurrInput';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1 ,setCurrency1] = useState('KGS');
  const [currency2 ,setCurrency2] = useState('KGS');
  const [rates , setRates] = useState([]);
  useEffect(() => {
    axios.get('https://api.apilayer.com/fixer/latest?base=KGS&apikey=wTGSZhXWhsoMaTb7sMBijxO3w8YaufE8')
    .then(response => {
      setRates(response.data.rates);
    })
  }, [])
  
  function handleAmount1Change(amount1){
    setAmount2(amount1*rates[currency2] / rates[currency1]);
    setAmount1(amount1);

  }
  return (
    <div className="App">
        <h1> Zhanbolot</h1>
        <CurrInput 
        onAmountChange={setAmount1}
        onCurrencyChange={setCurrency1}
        currencies={Object.keys(rates)} 
        amount={1} 
        currency={'KGS'} 
        />

        <CurrInput  
        onAmountChange={setAmount2}
        onCurrencyChange={setCurrency2}
        currencies={Object.keys(rates)} 
        amount={1} 
        currency={'KGS'} 
        /> 
    </div>
  );
}
export default App;
