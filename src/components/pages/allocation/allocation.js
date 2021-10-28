import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Tabs, Button, Spinner } from '../../../ui/';
import { MiniaturesAllocation } from '../miniatures';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './allocation.module.css';
import { AddStockPopup } from '../stocks/popups';
import { load, ready } from '../../../actions';
import { bindActionCreators } from 'redux';
import { AllocationCountry, AllocationSector } from './allocation-sector-contry';

/**
 * Allocation page.
 * @param {object} props - Props.
 * @param {object[]} props.stocks - Stock list from redux state.
 * @param {string[]} props.allocationSector - Allocation by sector data for table from redux state.
 * @param {string[]} props.allocationCountry - Allocation by contry data btfor table from redux state.
 * @param {boolean} props.loading - Loading redux state.
 * @param {Function} props.load - Redux action for setting loading on.
 * @param {Function} props.ready - Redux action for setting loading off.
 * @returns {Element} Allocation component.
 */
export const ComponentAllocation = ({ stocks, allocationSector, allocationCountry, loading, load, ready }) => {

    const onClose = (change) => {
        document.body.style.overflow = 'overlay';
        setAddStockPopupOn(false);
        if (change) {
            load();
            ready();
        }
    };

    const [addStockPopupOn, setAddStockPopupOn] = useState(false);
    const addStockPopup = addStockPopupOn ? <AddStockPopup onClose={onClose} /> : null;

    const onAddStock = () => {
        setAddStockPopupOn(true);
    };

    const miniatures = stocks.length > 5 ? <MiniaturesAllocation /> : <h2>portfolio allocation</h2>;

    if (stocks.length < 1) return (
        <div className={styles.empty}>
            {miniatures}
            <p className={styles.text}>Add few stocks to see your portfolio allocation</p>
            {addStockPopup}
            <Button icon={'fas fa-plus fa-sm'} width={'240'} color={'var(--color-gain)'} onClick={onAddStock}>
                add new holding
            </Button>
        </div>
    )

    const content = loading ?
        <Spinner />
        :
        (<div className={styles.container}>
            <span className={styles.switch}>
                <Tabs options={['sector', 'country']} small />
            </span>
            <Switch>
                <Route path='/(allocation/sector|allocation/)' >
                    <AllocationSector data={allocationSector} />
                </Route>
                <Route path='/allocation/country' >
                    <AllocationCountry data={allocationCountry} />
                </Route>
            </Switch>
        </div>);

    return (
        <div className={styles.page}>
            {miniatures}
            {content}
        </div>
    );
};

const mapStateToProps = ({ portfolio, newStock }) => {
    return {
        stocks: portfolio.stocks,
        allocationSector: portfolio.allocationSector,
        allocationCountry: portfolio.allocationCountry,
        loading: newStock.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ready: ready,
        load: load
    }, dispatch);
};

export const Allocation = connect(mapStateToProps, mapDispatchToProps)(ComponentAllocation);

ComponentAllocation.propTypes = {
    stocks: PropTypes.array,
    allocationSector: PropTypes.array,
    allocationCountry: PropTypes.array,
    loading: PropTypes.bool,
    load: PropTypes.func,
    ready: PropTypes.func
}