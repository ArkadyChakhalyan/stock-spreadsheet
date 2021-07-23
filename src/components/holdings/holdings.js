import React from 'react';
import './holdings.css';

const Holdings = () => {
    return (
        <div className='holdings info'>
        <div className='holdings container left'>
            <span className='holdings'><p>Holdings</p>
                <p className='holdings total'>$13213.28</p></span>
        </div>
        <div className='holdings container right'>
            <span className='holdings gains'><p>Month's Gain</p><p className='holdings gain'>$240.24 (+5.23%)</p></span>
            <span className='holdings gains'><p>Total Gain</p><p className='holdings gain'>$1103.94 (+20.83%)</p></span>
        </div>
    </div>
    );
};

export default Holdings;