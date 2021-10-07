import React, { useState } from 'react';
import { MiniaturesDividends } from '../miniatures';
import { Button, Spinner } from '../../../ui/';
import { DividendsPeriod } from './dividends-period';
import { DividendsRecieved } from './dividends-recieved';
import { DividendsSector } from './dividends-sector';
import { connect } from 'react-redux';
import { AddStockPopup } from '../stocks/popups';
import { load, ready } from '../../../actions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import styles from './dividends.module.css';
import { Fragment } from 'react';

/**
 * Dividends page.
 * @param {object} props - Props.
 * @param {object[]} props.stocks - Stock list from redux state.
 * @param {boolean} props.loading - Loading redux state.
 * @param {Function} props.load - Redux action for setting loading on.
 * @param {Function} props.ready - Redux action for setting loading off.
 * @param {string[]} props.dividends - Dividends data from redux state.
 * @param {boolean} props.empty - True if no dividends data in redux state.
 * @returns {Element} Dividends component.
 */
const ComponentDividends = ({ stocks, loading, load, ready, dividends, empty }) => {

    const onClose = (change) => {
        document.body.style.overflow = 'overlay';
        setAddStockPopupOn(false);
        if (change) {
            load();
            ready();
        }
    }

    const [addStockPopupOn, setAddStockPopupOn] = useState(false);
    const addStockPopup = addStockPopupOn ? <AddStockPopup onClose={onClose} /> : null;

    const onAddStock = () => {
        setAddStockPopupOn(true);
    };

    const title = empty ? 'dividend activity' : '';

    const miniatures = stocks.length > 5 ? <MiniaturesDividends /> : <h2 className={styles.miniatures}>{title}</h2>;

    if (stocks.length < 1) return (
        <div className={styles.empty}>
            {miniatures}
            <p className={styles.text}>Add few stocks and fill up how many dividends have been recived</p>
            {addStockPopup}
            <Button
                icon={'fas fa-plus fa-sm'}
                width={'240'}
                color={'var(--color-gain)'}
                onClick={onAddStock}
            >
                add new holding
            </Button>
        </div>
    )
    const content = loading ?
        <Spinner />
        :
        <Fragment>
            <DividendsPeriod dividends={dividends} empty={empty} />
            <div className={styles.container}>
                <DividendsRecieved />
                <DividendsSector stocks={stocks} empty={empty} />
            </div>
        </Fragment>

    return (
        <div className={styles.page}>
        {miniatures}
        {content}
        </div>
    );
};

const mapStateToProps = ({ portfolio, newStock, dividends }) => {
    return {
        stocks: portfolio.stocks,
        loading: newStock.loading,
        dividends: dividends.dividendsRecieved,
        empty: dividends.empty
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ready: ready,
        load: load
    }, dispatch);
};

export const Dividends = connect(mapStateToProps, mapDispatchToProps)(ComponentDividends);

ComponentDividends.propTypes = {
    stocks: PropTypes.array,
    loading: PropTypes.bool,
    load: PropTypes.func,
    ready: PropTypes.func,
    dividends: PropTypes.array,
    empty: PropTypes.bool
}