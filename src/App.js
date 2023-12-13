import React from 'react';
import './App.css';
import CurrInput from './components/CurrInput';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1 ,setCurrency1] = useState('USD');
  const [currency2 ,setCurrency2] = useState('USD');
  const [rates , setRates] = useState([]);
  function format(number) {
    return number.toFixed(4);
  }
  useEffect(() => {
    axios.get('https://api.apilayer.com/fixer/latest?base=USD&apikey=wTGSZhXWhsoMaTb7sMBijxO3w8YaufE8')
    .then(response => {
      setRates(response.data.rates);
    })
  }, [])

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [rates]);

  function handleAmount1Change(amount1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setCurrency2(currency2);
  }

  return (
    <div className="App">
        <h1> Zhanbolot</h1>
        <CurrInput 
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)} 
        amount={amount1} 
        currency={currency1} 
        />

        <CurrInput  
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)} 
        amount={amount2} 
        currency={currency2} 
        /> 
    </div>
  );
}
export default App;
