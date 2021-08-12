import React from 'react';
import { MiniaturesDividends } from '../miniatures';
import { DividendsPeriod } from './dividends-period';
import { DividendsRecieved } from './dividends-recieved';
import { DividendsSector } from './dividends-sector';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './dividends.module.css';

/**
 * Dividends page.
 * @param {object} props - Props.
 * @param {object[]} props.stocks - Stock list from redux state.
 * @returns {Element} Dividends component.
 */
export const ComponentDividends = ({stocks}) => {

    const miniatures = stocks.length > 5 ? <MiniaturesDividends /> : <h2 className={styles.miniatures}>dividend activity</h2>;

    return (
        <div className={styles.container1}>
            {miniatures}
            <DividendsPeriod />
            <div className={styles.container2}>
                <DividendsRecieved />
                <DividendsSector />
            </div>
        </div>
    );
};

const mapStateToProps = ({ stocks }) => {
    return {
        stocks,
    };
}

export const Dividends = connect(mapStateToProps, null)(ComponentDividends);

ComponentDividends.propTypes = {
    stocks: PropTypes.array
}