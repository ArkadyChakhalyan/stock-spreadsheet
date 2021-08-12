import React from 'react';
import styles from './dividends-sector.module.css';

/**
 * Dividends paid by sector chart.
 * @returns {Element} DividendsSector component.
 */
export const DividendsSector = () => {
    return (
        <div className={styles.container}>
            <h2>Dividends By Sector</h2>
            <div className={styles.chart}></div>
        </div>
    );
}