import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Spinner } from '../../../../ui';
import { DividendsSectorChart } from './dividends-sector-chart';
import styles from './dividends-sector.module.css';

/**
 * Dividends paid by sector chart.
 * @returns {Element} DividendsSector component.
 */
export const DividendsSector = ({ stocks }) => {

    let [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
    }, [stocks])

    const load = () => {
        setTimeout(() => {
            setLoading(false)
        }, 400);
        return <Spinner />;
    };

    const content = loading ? load()
            :
            (<Fragment>
                <h2>Dividends By Sector</h2>
                <DividendsSectorChart stocks={stocks} />
            </Fragment>)

    return (
        <div className={styles.container}>
            {content}
        </div>
    );
}