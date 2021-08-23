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
import { AllocationSector } from './allocation-sector/allocation-sector';
import { AllocationContry } from './allocation-country/allocation-contry';

/**
 * Allocation page.
 * @param {object} props - Props.
 * @param {object[]} props.stocks - Stock list from redux state.
 * @param {string[]} props.allocationSector - Allocation by sector data for table from redux state.
 * @param {string[]} props.allocationContry - Allocation by contry data btfor table from redux state.
 * @returns {Element} Allocation component.
 */
export const ComponentAllocation = ({ stocks, allocationSector, allocationContry, loading, load, ready }) => {

    const onClose = (change) => {
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
                <Tabs options={['sector', 'contry']} small />
            </span>
            <Switch>
                <Route path='/(allocation/sector|allocation/)' >
                    <AllocationSector allocationSector={allocationSector} />
                </Route>
                <Route path='/allocation/contry' >
                    <AllocationContry allocationContry={allocationContry} />
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
        allocationContry: portfolio.allocationContry,
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
    allocationContry: PropTypes.array,
}