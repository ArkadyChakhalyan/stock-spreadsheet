import React from 'react';
import { Tabs } from '../../../../ui/';
import { Route, Switch } from 'react-router-dom';
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
            <Switch>
                <Route path='/(dividends/monthly|dividends/)'>
                    <div className={styles.chart}>dividends per month</div>
                </Route>
                <Route path='/dividends/yearly'>
                    <div className={styles.chart}>dividends per year</div>
                </Route>
            </Switch>
        </div>
    );
}