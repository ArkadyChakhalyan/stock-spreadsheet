import React, { useState } from 'react';
import { Button } from '../../../../../ui/';
import { connect } from 'react-redux';
import { deleteStock } from '../../../../../actions';
import { compose } from '../../../../../utils';
import PropTypes from 'prop-types';
import { EditStockPopup } from '../../popups/edit-stock-popup';
import styles from './holdings.module.css';

/**
 * Stock's info page inside stock popup.
 * @param {object} props - Props.
 * @param {Function} props.deleteStock - Redux action for deleting stock.
 * @param {Function} props.onDeleteStock - Callback function for closing stock popup.
 * @param {object} props.stock - Stock data.
 * @returns {Element} StockInfo component.
 */
const ComponentHoldings = ({ stock, deleteStock, onDeleteStock }) => {

    const onClose = () => {
        setPopupOn(false);
    }

    const onDelete = () => {
        deleteStock(stock.symbol);
        document.body.style.overflow = 'overlay';
        onDeleteStock();
    }

    const [popupOn, setPopupOn] = useState(false);
    const popup = popupOn ? <EditStockPopup onClose={onClose} stock={stock} /> : null;

    const onClick = () => {
        setPopupOn(true);
    }

    const bg = stock.currentPrice - stock.avarageCost >= 0 ? 'var(--color-gain)' : 'var(--color-error)';

    return (
        <div className={styles.container}>
            <div className={styles.holdings} style={{background: bg}}>
                {popup}
                <h1>Your<br />Holdings</h1>
                <span className={styles.data}><p className={styles.label}>Avarage Cost</p><p className={styles.number}>${stock.avarageCost}</p></span>
                <span className={styles.data}><p className={styles.label}>Shares</p><p className={styles.number}>{stock.shares}</p></span>
                <span className={styles.data}><p className={styles.label}>Total Gains</p><p className={styles.number}>{Math.round(((stock.currentPrice - stock.avarageCost) * stock.shares) * 100) / 100} ({Math.round(((stock.currentPrice - stock.avarageCost) / stock.avarageCost) * 100 * 100) / 100}%)</p></span>
            </div>
            <div className={styles.buttons}>
                <Button width={'95'} icon={'fas fa-pen fa-sm'} onClick={onClick}>Edit</Button>
                <Button icon={'fas fa-trash fa-sm'} color={'var(--color-error)'} onClick={onDelete}>delete</Button>
            </div>
        </div>
    );
}

const mapDispatchToProps = { deleteStock }

export const Holdings = (
    compose(
        connect(null, mapDispatchToProps)
    )(ComponentHoldings)
);

ComponentHoldings.propTypes = {
    onDeleteStock: PropTypes.func,
    deleteStock: PropTypes.func,
    stock: PropTypes.object
}
