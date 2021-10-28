import React from 'react';
import { CollumnChart } from '../../../../../ui';
import PropTypes from 'prop-types';
import styles from './sales-chart.module.css';

/**
 * Sales chart.
 * @param {object} props - Props.
 * @param {object} props.stock - Stock data.
 * @returns {Element} SalesChart component.
 */
export const SalesChart = ({ stock }) => {

    const { yearly } = stock;

    let years = 0;
    for (let key in yearly) {
        if (yearly[key]) years++;
    }

    if (years < 1 || !yearly) {
        return (
            <p>No financial data yet</p>
        )
    }

    return (
        <div className={styles.container}>
            <p className={styles.group}>Financials</p>
            <span className={styles.label}>
                <span className={styles.line}><div className={styles.revenue} /><p>Revenue</p></span>
                <span className={styles.line}><div className={styles.earnings} /><p>Earnings</p></span>
            </span>
            <div className={styles.chart}>
                <CollumnChart
                    double
                    scaleData={scaleData}
                    data={yearly} />
            </div>
        </div>
    )
};

const scaleData = (data, idx, low) => {
    let scales = [0];
    for (let i = Math.ceil(data[idx].revenue); ; i++) {
        if (i > 9999) {
            if (i % 5000 === 0) {
                for (let j = 1; j < 8; j++) {
                    scales.push(Math.round(i / 8 * j));
                }
                scales.push(i);
                break;
            }
        } else {
            if (i % 10 === 0) {
                for (let j = 1; j < 8; j++) {
                    scales.push(Math.round(i / 8 * j));
                }
                scales.push(i);
                break;
            }
        }
    }

    const scalesCopy = [...scales];

    for (let i = 0; i < scalesCopy.length; i++) {
        if (scalesCopy[i] < -low && scales[i] != 0) {
            scales.unshift(-scalesCopy[i]);
        }
    }

    return scales;
};

SalesChart.propTypes = {
    stock: PropTypes.object
}