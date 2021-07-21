import React from 'react';
import './stockMiniature.css';

const StockMiniature = (props) => {

    const { gain } = props;

    let className = 'miniature container ';

    if (gain > 0) className += 'up';
    if (gain < 0) className += 'down';
    return (
        <div className={className}>
            <div className='miniature left'>
                <p className='miniature ticker'>APPL</p>
                <p className='miniature company'>Apple Inc</p>
            </div>
            <div className='miniature right'>
                <p className='miniature percent'>+2.29%</p>
                <p className='miniature number'>$1250.35</p>
                
            </div >
        </div>
    );
}

export default StockMiniature;
