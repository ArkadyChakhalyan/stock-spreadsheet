import React from 'react';
import './stockMiniature.css';

const StockGain = () => {
    return (
        <div className='container'>
            <div className='stock gain left'>
                <p className='stock gain ticker'>APPL</p>
                <br></br>
                <p className='stock gain company'>Apple Inc</p>
            </div>
            <div className='stock gain right'>
                <p className='stock gain price'>125.56</p>
                <br></br>
                <div className='stock gain gains'>+2.29%</div>
            </div>
        </div>
    );
}

export default StockGain;
