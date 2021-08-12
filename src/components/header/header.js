import React from 'react';
import { Menu } from './menu';
import { Route } from 'react-router-dom';
import { HoldingsAllocation, HoldingsDividends, HoldingsGains } from './holdings';
import styles from './header.module.css';

/**
 * Header.
 * @returns {Element} Header component.
 */
export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.name}>
                <h1>stock<br />spreadsheet</h1>
                <h2>track your cashflow</h2>
            </div>
            <Route path='/stocks/' component={HoldingsGains} />
            <Route path='/allocation/' component={HoldingsAllocation} />
            <Route path='/dividends/' component={HoldingsDividends} />
            <Menu />
        </div>
    )
}