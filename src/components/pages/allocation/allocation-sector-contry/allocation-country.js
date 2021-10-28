import React, { useState } from 'react';
import { Fragment } from 'react';
import { Spinner, Table, PieChart } from '../../../../ui';
import PropTypes from 'prop-types';
import styles from '../allocation.module.css';

/**
 * Allocation by contry - table and chart.
 * @param {object} props - Props.
 * @param {string[]} props.data - Allocation by country data for table from redux state.
 * @returns {Element} Allocation by contry.
 */
export const AllocationCountry = ({ data }) => {

    const [loading, setLoading] = useState(true);

    const load = () => {
        setTimeout(() => {
            setLoading(false)
        }, 450);
        return <Spinner />
    };
    
    const content = loading ? load()
        : <PieChart
            canvasWidth={712}
            canvasHeight={540}
            data={data} />;

    return (
        <Fragment>
            <div className={styles.chart}>
                {content}
            </div>
            <Table
                width={'420'}
                collumns={['Country', 'Allocation']}
                data={data}
                onClick={() => { }}
                onlyDesktop />
        </Fragment>
    )
};

AllocationCountry.propTypes = {
    data: PropTypes.array,
}

