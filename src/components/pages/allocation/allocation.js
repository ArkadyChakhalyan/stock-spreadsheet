import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Table, Tabs, Button } from '../../../ui/';
import { MiniaturesAllocation } from '../miniatures';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './allocation.module.css';
import { AddStockPopup } from '../stocks/popups';

/**
 * Allocation page.
 * @param {object} props - Props.
 * @param {object[]} props.stocks - Stock list from redux state.
 * @param {string[]} props.allocationSector - Allocation by sector data for table from redux state.
 * @param {string[]} props.allocationContry - Allocation by contry data btfor table from redux state.
 * @returns {Element} Allocation component.
 */
export const ComponentAllocation = ({ stocks, allocationSector, allocationContry }) => {

    const onClose = () => {
        setAddStockPopupOn(false);
    }

    const [addStockPopupOn, setAddStockPopupOn] = useState(false);
    const addStockPopup = addStockPopupOn ? <AddStockPopup onClose={onClose} /> : null;

    const onAddStock = () => {
        setAddStockPopupOn(true);
    }

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

    return (
        <div className={styles.page}>
            {miniatures}
            <div className={styles.container}>
                <span className={styles.switch}>
                    <Tabs options={['sector', 'contry']} small />
                </span>
                <Switch>
                    <Route path='/(allocation/sector|allocation/)'>
                        <div className={styles.chart}>allocation by sector</div>
                        <Table
                            width={'280'}
                            collumns={['Sector', 'Allocation']}
                            data={allocationSector}
                            onClick={() => {}} />
                    </Route>
                    <Route path='/allocation/contry'>
                        <div className={styles.chart}>allocation by contry</div>
                        <Table
                            width={'280'}
                            collumns={['Contry', 'Allocation']}
                            data={allocationContry}
                            onClick={() => {}} />
                    </Route>
                </Switch>
            </div>
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

export const Allocation = connect(mapStateToProps, null)(ComponentAllocation);

ComponentAllocation.propTypes = {
    stocks: PropTypes.array,
    allocationSector: PropTypes.array,
    allocationContry: PropTypes.array,
}