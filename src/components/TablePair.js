import React from 'react';

const TablePair = ({ rates }) => {
    return (
        <div>
                <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">First Currency </th>
            <th scope="col">Second Currency</th>

            </tr>
        </thead>
        <tbody>
            <tr>
            <td> 1 KGS</td>
            <td> {(rates['RUB']/1).toFixed(4)} RUB</td>
            </tr>
            <tr>
            <td> 1 USD</td>
            <td>{(rates['KGS'] / rates['USD']).toFixed(4)} KGS</td>
            </tr>
            <tr>
            <td> 1 KGS</td>
            <td>{(rates['KZT'] / rates['KGS']).toFixed(4)} KZT</td>
            </tr>
            <tr>
            <td> 1 EUR</td>
            <td>{(rates['KGS'] / rates['EUR']).toFixed(4)} KGS</td>
            </tr>
            <tr>

            <td> 1 EUR</td>
            <td>{(rates['USD'] / rates['EUR']).toFixed(4)} USD</td>

            </tr>
            <tr>
            <td> 1 EUR</td>
            <td>{(rates['GBP'] / rates['EUR']).toFixed(4)} GBP</td>
            </tr>
        </tbody>
        </table>
        
        </div>
   )};
   
   export default TablePair;