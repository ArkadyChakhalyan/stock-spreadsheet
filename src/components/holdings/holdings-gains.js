import React from 'react';
import { connect } from 'react-redux';
import './holdings.css';

const ComponentHoldingsGains = ({ totalGains, totalValue }) => {

    let percentage;
    if (totalGains) percentage = totalGains > 0 ? `(+${Math.round((totalGains / totalValue) * 100 * 100) / 100}%)` : `(${Math.round((totalGains / totalValue) * 100 * 100) / 100}%)`
    
    let number;
    if (totalGains) number = totalGains > 0 ? `+${totalGains}` : totalGains

    return (
        <div className='holdings info'>
            <div className='holdings container left'>
                <span className='holdings'><p className='top-label'>Portfolio Value</p>
                    <p className='holdings total'>${totalValue}</p></span>
            </div>
            <table className='holdings container right'>
                <tbody>
                    <tr className='holdings gains'>
                        <td><p>Months Gain</p></td>
                        <td><p className='holdings number'>240.24 (+5.23%)</p></td>
                    </tr>
                    <tr className='holdings gains'>
                        <td><p>Total Gain</p></td>
                        <td><p className='holdings number'>{number} {percentage}</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = ({ totalGains, totalValue }) => {
    return {
        totalGains,
        totalValue
    };
}

export const HoldingsGains = connect(mapStateToProps, null)(ComponentHoldingsGains);


