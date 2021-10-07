import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { CollumnChart, Spinner } from '../../../../ui';
import styles from './dividends-sector.module.css';

/**
 * Dividends paid by sector chart.
 * @param {object} props - Props.
 * @param {object[]} props.stocks - Stock list from redux state.
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

    let paid = {};

    stocks.map((item) => {
        if (paid[item.sector]) paid[item.sector] += Math.round(item.dividendRate * item.shares * 100) / 100;
        else paid[item.sector] = Math.round(item.dividendRate * item.shares * 100) / 100;
    });

    const content = loading ? load()
            :
            (<Fragment>
                <h2>Dividends By Sector</h2>
                <CollumnChart 
                    canvasHeight={587}
                    canvasWidth={612}
                    data={sort(paid)}
                    scaleData={scaleData}
                    horizontal />
            </Fragment>)

    return (
        <div className={styles.container}>
            {content}
        </div>
    );
}

const sort = (obj) => {

    let arr = [];

    for (let key in obj) {
        arr.push([key, obj[key]]);
    }

    arr.sort((a, b) => {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0;
    });

    let newObj = {};

    for (let i = 0; i < arr.length; i++) {
        newObj[arr[i][0]] = arr[i][1];
    }

    return newObj;
};

const scaleData = (data, idx) => {
    let scales = [0];
    for (let i = Math.ceil(data[idx]); ; i++) {
        if (i > 999) {
            if (i % 1000 === 0) {
                for (let j = 1; j < 8; j++) {
                    scales.push(i / 8 * j);
                }
                scales.push(i);
                break;
            }
        } else {
            if (i % 5 === 0) {
                for (let j = 1; j < 8; j++) {
                    scales.push(i / 8 * j);
                }
                scales.push(i);
                break;
            }
        }
    }
    return scales;
};

DividendsSector.propTypes = {
    stocks: PropTypes.array
}