import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './holdings.css';

/**
 * Holdings Gains.
 * @returns {Element} HoldingsGains component.
 */

const ComponentHoldingsGains = ({ totalGains, totalValue }) => {

    let percentage = ' (0%)';
    if (totalGains) percentage = totalGains > 0 ? `(+${Math.round((totalGains / totalValue) * 100 * 100) / 100}%)` : `(${Math.round((totalGains / totalValue) * 100 * 100) / 100}%)`
    
    let number ='$0';
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

ComponentHoldingsGains.propTypes = {
    totalGains: PropTypes.number,
    totalValue: PropTypes.number
}


