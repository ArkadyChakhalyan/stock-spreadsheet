import React from 'react';
import { CollumnChart } from '../../../../ui';
import PropTypes from 'prop-types';

/**
 * Dividends by year chart.
 * @param {object} props - Props.
 * @param {Array} props.data - Dividend data from redux state.
 * @returns {Element} Yearly component.
 */
export const Yearly = ({ data }) => {
    return (
        <CollumnChart
            scaleData={scaleData}
            data={paidByYear(data)}
        />
    )
}

const paidByYear = (data) => {
    let paid = [];

    for (let i = 0; i < data.length; i++) {
        paid.push(data[i][2]);
    }

    for (let i = 0; i < paid.length; i++) {
        if (paid[i] > 0) {
            paid = paid.splice(i);
            break;
        }
    }

    return paid;
};

const scaleData = (data, idx) => {
    let scales = [0];
    for (let i = Math.ceil(data[idx]); ; i++) {
        if (i > 1000) {
            if (i % 1000 === 0) {
                for (let j = 1; j < 5; j++) {
                    scales.push(i / 5 * j);
                }
                scales.push(i);
                break;
            }
        } else {
            if (i % 10 === 0) {
                for (let j = 1; j < 5; j++) {
                    scales.push(i / 5 * j);
                }
                scales.push(i);
                break;
            }
        }
    }
    return scales;
};

Yearly.propTypes = {
    data: PropTypes.array
}