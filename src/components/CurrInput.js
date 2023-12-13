import React from "react";
import PropTypes from "prop-types"
function CurrInput(props){
    return (
        <div className="collection">
            <input type="text" value={props.amount} onChange={
              event => props.onAmountChange(event.target.value) 
            }/>
            <select value={props.currency} onChange={event => props.onCurrencyChange(event.target.value)}>
                {props.currencies.map((currency => (
                    <option value={currency}>   {currency}   </option>
                )))}
            </select>
        </div>
    );
}
CurrInput.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange : PropTypes.func,
    onCurrencyChange : PropTypes.func,
}
export default CurrInput;