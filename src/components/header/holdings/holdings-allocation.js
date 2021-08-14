import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './holdings.module.css';

/**
 * Holdings Allocation.
 * @param {object} props - Props.
 * @param {object[]} props.stocks - Stock list from redux state.
 * @param {string[]} props.allocationSector - Portfolio allocation by sectors rom redux state.
 * @param {string[]} props.allocationContry - Portfolio allocation by contries rom redux state.
 * @returns {Element} HoldingsAllocations component.
 */
export const ComponentHoldingsAllocation = ({ stocks, allocationSector, allocationContry }) => {


    const sectors = allocationSector.length > 0 ? allocationSector.length : '-';
    const contries = allocationContry.length > 0 ? allocationContry.length : '-';

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <span><p className={styles.label}>Number of Holdings</p>
                    <p className={styles.total}>{stocks.length}</p></span>
            </div>
            <table className={styles.right}>
                <tbody>
                    <tr className={styles.gains}>
                        <td><p>Sector Exposure</p></td>
                        <td><p className={styles.number}>{sectors}</p></td>
                    </tr>
                    <tr className={styles.gains}>
                        <td><p>Geographic Exposure</p></td>
                        <td><p className={styles.number}>{contries}</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = ({ portfolio }) => {
    return {
        stocks: portfolio.stocks,
        allocationSector: portfolio.allocationSector,
        allocationContry: portfolio.allocationContry
    };
}

export const HoldingsAllocation = connect(mapStateToProps, null)(ComponentHoldingsAllocation);

ComponentHoldingsAllocation.propTypes = {
    stocks: PropTypes.array,
    allocationContry: PropTypes.array,
    allocationSector: PropTypes.array
}
