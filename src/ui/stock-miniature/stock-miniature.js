import React from 'react';
import './stockMiniature.css';

/**
 * stock miniature
 * @param {number} gain - positive number colors background in green, negative - in red
 * @param {string} ticker - stock's ticker
 * @param {string} company - stock's full company name
 * @param {string} number - absolute number
 * @param {string} percent - percentage
 * @returns {ReactElement} stock miniature component
 */

export const StockMiniature = ({ gain, ticker, company, number, percent }) => {

    let className = 'miniature box ';

    if (gain > 0) className += 'up';
    if (gain < 0) className += 'down';

    return (
        <div className={className}>
            <div className='miniature left'>
                <p className='miniature ticker'>{ticker}</p>
                <p className='miniature company'>{company}</p>
            </div>
            <div className='miniature right'>
                <p className='miniature percent'>{percent}</p>
                <p className='miniature number'>{number}</p>
            </div >
        </div>
    );
}
