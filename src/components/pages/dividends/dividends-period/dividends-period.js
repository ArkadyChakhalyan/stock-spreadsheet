import React from 'react';
import { Tabs } from '../../../../ui/';
import './dividends-period.css';

export const DividendsPeriod = () => {
    return (
        <div className='dividends period container'>
            <Tabs options={['monthly', 'yearly']} small />
            <div className='chart'></div>
        </div>
    );
}