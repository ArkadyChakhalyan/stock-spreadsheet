import React from 'react';
import './holdings.css';

const HoldingsDividends = () => {
    return (
        <div className='holdings info'>
            <div className='holdings container left'>
                <span className='holdings'><p className='top-label'>Annual Dividend Income</p>
                    <p className='holdings total'>$140.40</p></span>
            </div>
            <table className='holdings container right'>
                <tbody>
                    <tr className='holdings gains'>
                        <td><p>Paid per Month</p></td>
                        <td><p className='holdings number'>$14.24</p></td>
                    </tr>
                    <tr className='holdings gains'>
                        <td><p>Yield on Cost</p></td>
                        <td><p className='holdings number'>3.83%</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default HoldingsDividends;