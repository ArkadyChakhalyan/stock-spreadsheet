import React from 'react';
import './dividends-sector.css';

/**
 * Dividends paid by sector chart.
 * @returns {Element} DividendsSector component.
 */

export const DividendsSector = () => {
    return (
        <div className='dividends-sector'>
            <h2>Dividends By Sector</h2>
            <div className='chart'></div>
        </div>
    );
}