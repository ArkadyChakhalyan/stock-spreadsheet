import React from 'react';
import { Table, Tabs } from '../../../ui/';
import { MiniaturesAllocation } from '../miniatures';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './allocation.module.css';

/**
 * Allocation page.
 * @param {object} props - Props.
 * @param {object[]} props.stocks - Stock list from redux state.
 * @param {string[]} props.allocation - Allocation data for table from redux state.
 * @returns {Element} Allocation component.
 */
export const ComponentAllocation = ({ stocks, allocation }) => {

    const miniatures = stocks.length > 5 ? <MiniaturesAllocation /> : <h2>portfolio allocation</h2>;

    return (
        <div>
            {miniatures}
            <div className={styles.container}>
                <span className={styles.switch}>
                    <Tabs options={['sector', 'contry']} small />
                </span>
                <div className={styles.chart}></div>
                <Table
                    width={'280'}
                    collumns={['Sector', 'Allocation']}
                    data={allocation} />
            </div>
        </div>
    );
};

const mapStateToProps = ({ stocks, allocation }) => {
    return {
        stocks,
        allocation
    };
}

export const Allocation = connect(mapStateToProps, null)(ComponentAllocation);

ComponentAllocation.propTypes = {
    stocks: PropTypes.array,
    allocation: PropTypes.array,
}