import React, { useState } from 'react';
import { Fragment } from 'react';
import { PieChart, Spinner, Table } from '../../../../ui';
import PropTypes from 'prop-types';
import styles from '../allocation.module.css';

/**
 * Allocation by sector - table and chart.
 * @param {object} props - Props.
 * @param {string[]} props.data - Allocation by sector data for table from redux state.
 * @returns {Element} Allocation by sector.
 */
export const AllocationSector = ({ data }) => {

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
                collumns={['Sector', 'Allocation']}
                data={data}
                onClick={() => { }}
                onlyDesktop />
        </Fragment>
    )
};

AllocationSector.propTypes = {
    data: PropTypes.array,
}