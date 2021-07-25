import React from 'react';
import './holdings.css';

const HoldingsGains = () => {
    return (
        <div className='holdings info'>
            <div className='holdings container left'>
                <span className='holdings'><p className='top-label'>Portfolio Value</p>
                    <p className='holdings total'>$13213.28</p></span>
            </div>
            <table className='holdings container right'>
                <tbody>
                    <tr className='holdings gains'>
                        <td><p>Month's Gain</p></td>
                        <td><p className='holdings number gain'>$240.24 (+5.23%)</p></td>
                    </tr>
                    <tr className='holdings gains'>
                        <td><p>Total Gain</p></td>
                        <td><p className='holdings number gain'>$1103.94 (+20.83%)</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default HoldingsGains;
