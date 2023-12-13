import React from "react";
import PropTypes from "prop-types"
import './CurrInput.css';
function CurrInput(props){
    return (
        <div className="collection">
                    <div className="form-group">
                        <input className="form-control" type="text" value={props.amount} onChange={
                            event => props.onAmountChange(event.target.value)
                        } />
                    </div>
                    <div className="form-group">
                        <select className="form-control" value={props.currency} onChange={event => props.onCurrencyChange(event.target.value)}>
                            {props.currencies.map((currency) => (
                                <option value={currency}>{currency}</option>
                            ))}
                        </select>
                    </div>
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