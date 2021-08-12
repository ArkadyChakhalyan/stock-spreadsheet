import React from 'react';
import { Tabs } from '../../../../ui/';
import styles from './dividends-period.module.css';

/**
 * Dividends by month/year chart.
 * @returns {Element} DividendsPeriod component.
 */
export const DividendsPeriod = () => {
    return (
        <div className={styles.container}>
            <span className={styles.switch}>
                <Tabs options={['monthly', 'yearly']} small />
            </span>
            <div className={styles.chart}></div>
        </div>
    );
}