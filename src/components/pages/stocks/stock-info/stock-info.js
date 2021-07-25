import React from 'react';
import './stock-info.css';

const StockInfo = () => {

    return (
        <div className='stock info'>
            <div className='chart'>Stock chart</div>
            <div className='valuation'>
                <table>
                    <tbody>
                        <tr>
                            <th colSpan="4">Valuation</th>
                        </tr>
                        <tr>
                            <td>Market Cap</td>
                            <td className='data'>2.476T</td>
                            <td>Enterprise Value</td>
                            <td className='data'>2.476T</td>
                        </tr>
                        <tr>
                            <td>P/B</td>
                            <td className='data'>35.86</td>
                            <td>P/S</td>
                            <td className='data'>6.86</td>
                        </tr>
                        <tr>
                            <td>P/E</td>
                            <td className='data'>33.29</td>
                            <td>Forward P/E</td>
                            <td className='data'>26.54</td>
                        </tr>
                        <tr>
                            <th colSpan="4">Dividend</th>
                        </tr>
                        <tr>
                            <td>Dividend</td>
                            <td className='data'>0.88 (0.59%)</td>
                            <td>Payout Ratio</td>
                            <td className='data'>18.34%</td>
                        </tr>
                        <tr>
                            <th colSpan="4">Balance Sheet</th>
                        </tr>
                        <tr>
                            <td>Total Cash</td>
                            <td className='data'>69.34B</td>
                            <td>Total Debt</td>
                            <td className='data'>134.74</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='sales profits'>Sales and profits charts</div>
        </div>
    );
}

export default StockInfo