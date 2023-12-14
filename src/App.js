import React from 'react';
import './App.css';
import CurrInput from './components/CurrInput';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TablePair from './components/TablePair';
import { FaExchangeAlt } from 'react-icons/fa';
function App() {

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1 ,setCurrency1] = useState('KGS');
  const [currency2 ,setCurrency2] = useState('KGS');
  const [rates , setRates] = useState([]);
  function format(number) {
    return number.toFixed(4);
  }
  useEffect(() => {
    axios.get('https://api.apilayer.com/fixer/latest?base=KGS&apikey=pQts4gW5AAjyCbn9g1SoUGey44fV95cM')
    .then(response => {
      response.data.rates['Qorot'] = 0.2000;
      response.data.rates['Nan'] = 0.0357;
      response.data.rates['Toibos'] = 0.0138;
      response.data.rates['Shaurma'] = 0.005;
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
 function handleButtonClick() {
    const newCurrency2 = currency1;
    const newAmount2 = amount1;

    setAmount1(amount2);
    setAmount2(newAmount2);
    setCurrency1(currency2)
    setCurrency2(newCurrency2);
 }
  return (
    <div className="App container">
        <div>
              <h1> Currency Converter</h1>
              <CurrInput 
              onAmountChange={handleAmount1Change}
              onCurrencyChange={handleCurrency1Change}
              currencies={Object.keys(rates)} 
              amount={amount1} 
              currency={currency1} 
              />
              <button className="btn btn-primary" onClick={handleButtonClick}>
          <FaExchangeAlt />
        </button>
              <CurrInput  
              onAmountChange={handleAmount2Change}
              onCurrencyChange={handleCurrency2Change}
              currencies={Object.keys(rates)} 
              amount={amount2} 
              currency={currency2} 
              /> 
         </div>
          <div className='tables'>
            <h1>Most Popular Pairs</h1>
            <TablePair rates={rates}/> 
          </div>
    </div>
  );
}
export default App;
