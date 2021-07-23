import React from 'react';
import './stockMiniature.css';

const StockMiniature = (props) => {

    const { gain, ticker, company, number, percent } = props;

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

export default StockMiniature;
