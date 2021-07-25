import React from 'react';
import Tabs from '../../../../ui/tabs';
import './dividends-period.css';

const DividendsPeriod = () => {
    return (
        <div className='dividends period container'>
             <Tabs options={['monthly', 'yearly']} small />
             <div className='chart'>Chart</div>
        </div>
    );
}

export default DividendsPeriod;