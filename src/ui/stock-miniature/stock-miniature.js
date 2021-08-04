import React from 'react';
import PropTypes from 'prop-types';
import './stockMiniature.css';

/**
 * Stock miniature.
 * @param {number} gain - Positive number colors background in green, negative - in red.
 * @param {string} ticker - Stock's ticker.
 * @param {string} company - Stock's full company name.
 * @param {(string|number)} number - Absolute number.
 * @param {(string|number)} percent - Percentage.
 * @returns {Element} Stock miniature component.
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

StockMiniature.propTypes = {
    gain: PropTypes.number,
    ticker: PropTypes.string,
    company: PropTypes.string,
    number: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
    percent: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
}
