import React from 'react';
import { Tabs } from '../../../../ui/';
import './dividends-period.css';

/**
 * Dividends by month/year chart.
 * @returns {Element} DividendsPeriod component.
 */

export const DividendsPeriod = () => {
    return (
        <div className='dividends period container'>
            <Tabs options={['monthly', 'yearly']} small />
            <div className='chart'></div>
        </div>
    );
}