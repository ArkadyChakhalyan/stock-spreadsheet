import React from 'react';
import { CollumnChart } from '../../../../ui';
import PropTypes from 'prop-types';

/**
 * Dividends by month chart.
 * @param {object} props - Props.
 * @param {Array} props.data - Dividend data from redux state.
 * @returns {Element} Monthly component.
 */
export const Monthly = ({ data }) => {
    return (
        <CollumnChart
            canvasWidth={1100}
            canvasHeight={264}
            scaleData={scaleData}
            data={paidByMonth(data)}
        />
    )
}

const paidByMonth = (data) => {
    let paid = [];

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i][1].length; j++) {
            paid.push(data[i][1][j][1].slice(1));
        }
    }

    const date = new Date();
    const currentMonth = date.getMonth();
    const month = 12 - currentMonth;
    paid.splice(paid.length - month);

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

Monthly.propTypes = {
    data: PropTypes.array
}