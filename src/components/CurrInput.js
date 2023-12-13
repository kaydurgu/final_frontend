import React from "react";
function CurrInput(props){
    return (
        <div className="collection">
            <input type="text" value={props.amount}/>
            <select value={props.currency}>
                {props.currencies.map((currency => (
                    <option value={currency}>   {currency}   </option>
                )))}
            </select>
        </div>
    );
}
export default CurrInput;