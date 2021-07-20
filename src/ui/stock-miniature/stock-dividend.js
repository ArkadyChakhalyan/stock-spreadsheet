import React from 'react';
import './stockMiniature.css';

const StockDividend = () => {
    return (
        <div className='container'>
            <div className='stock dividend left'>
                <p className='stock dividend ticker'>APPL</p>
                <br></br>
                <p className='stock dividend company'>Apple Inc</p>
            </div>
            <div className='stock dividend right'>
                <p className='stock dividend paid'>$8.8</p>
                <br></br>
                <p className='stock dividend yield'>0.99%</p>
            </div>
        </div>
    );
}

export default StockDividend;
