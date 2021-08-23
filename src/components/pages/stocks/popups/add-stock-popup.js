import React, { useState, Fragment } from 'react';
import { Popup, Input, Button } from '../../../../ui';
import { addStock, clearState, fetchStock } from '../../../../actions';
import { withStockService } from '../../../hoc';
import { connect } from 'react-redux';
import { compose } from '../../../../utils';
import PropTypes from 'prop-types';
import styles from './popup.module.css';
import { bindActionCreators } from 'redux';

/**
 * Add new stock popup.
 * @param {object} props - Props.
 * @param {Function} props.onClose - Callback function for closing popup.
 * @param {Function} props.addStock - Redux action for adding a new stock.
 * @returns {Element} StockPopup component.
 */
const ComponentAddStockPopup = ({ onClose, addStock, newStock, fetchStock, clearState }) => {

    let change;

    const close = () => {
        setErrorPrice(false);
        setErrorShares(false);
        onClose(change);
    }

    const [tickerValue, setTickerValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [sharesValue, setSharesValue] = useState('');

    const rgxNum = /^[0-9]*\.?[0-9]*$/;
    const rgxStr = /^[A-Za-z]*$/;

    let disabled = true;

    const onSubmit = () => {
        let rgxNum = /^[0-9]*\.?[0-9]*$/;
        let rgxStr = /^[A-Za-z]*$/;

        if (!newStock) {
            setErrorTicker(true);
        }

        if (tickerValue === ''
            || !tickerValue.match(rgxStr)
            || priceValue === ''
            || sharesValue === ''
            || +sharesValue === 0
            || !sharesValue.match(rgxNum)
            || !newStock
            || errorTicker
            || errorShares
            || errorPrice
        ) {
            disabled = true;
            return;
        }

        if (newStock) {
            let ticker = tickerValue;
            let avarageCost = Math.round(priceValue * 100) / 100;
            let shares = Math.round(sharesValue * 100) / 100;
            addStock(newStock, ticker, avarageCost, shares);
            change = true;
            clearState();
        }

        close();
    };

    const [errorTicker, setErrorTicker] = useState(false);
    const [errorPrice, setErrorPrice] = useState(false);
    const [errorShares, setErrorShares] = useState(false);

    const onBlurTicker = () => {
        if (!newStock || tickerValue !== newStock.symbol.toLowerCase()) fetchStock(tickerValue);
        if (tickerValue === '' || !tickerValue.match(rgxStr)) setErrorTicker(true);
    };
    const onFocusTicker = () => {
        if (errorTicker || newStock) setErrorTicker(false);
    };
    const onBlurPrice = () => {
        if (!priceValue.toString().match(rgxNum) || priceValue === '') setErrorPrice(true);
    };
    const onFocusPrice = () => {
        if (errorPrice) setErrorPrice(false);
    };
    const onBlurShares = () => {
        if (!sharesValue.toString().match(rgxNum) || sharesValue === '') setErrorShares(true);
    };
    const onFocusShares = () => {
        if (errorShares) setErrorShares(false);
    };

    if (!(tickerValue === '')
        && !(priceValue === '')
        && !(sharesValue === '')
        && !(+sharesValue === 0)
        && tickerValue.match(rgxStr)
        && priceValue.toString().match(rgxNum)
        && sharesValue.toString().match(rgxNum)
        && newStock
        && !errorTicker
        && !errorShares
        && !errorPrice
    ) {
        disabled = false;
    } else {
        disabled = true;
    }

    const head = (
        <div className={styles.headSmall}>
            <p className={styles.company}>New Holding</p>
            <br />
            <p className={styles.ticker}>Type ticker, avarage price and shares bought</p>
            <div className={styles.barSmall}></div>
        </div>
    );

    const inside = (
        <Fragment>
            <div className={styles.insideSmall}>
                <Input
                    label={'Ticker'}
                    width={'242'}
                    onChange={e => {
                        setTickerValue(e.target.value);
                        fetchStock(e.target.value);
                    }}
                    onBlur={onBlurTicker}
                    onFocus={onFocusTicker}
                    error={errorTicker}
                    errorMessage={`Invalid format`} />
                <Input
                    label={'Price'}
                    width={'242'}
                    onChange={e => {
                        setPriceValue(e.target.value);
                    }}
                    onBlur={onBlurPrice}
                    onFocus={onFocusPrice}
                    error={errorPrice}
                    errorMessage={'Invalid format'} />
                <Input
                    label={'Shares'}
                    width={'242'}
                    onChange={e => {
                        setSharesValue(e.target.value);
                    }}
                    onBlur={onBlurShares}
                    onFocus={onFocusShares}
                    error={errorShares}
                    errorMessage={'Invalid format'} />
            </div>
            <div className={styles.submit}>
                <Button
                    onClick={onSubmit}
                    width={'258'}
                    disabled={disabled} >add</Button>
            </div>
        </Fragment>
    );

    const onKeyPress = (e) => {
        if (e.code === 'Enter') onSubmit();
    }

    return (
        <Popup onClose={close} head={head} inside={inside} onKeyPress={onKeyPress} />
    );
}

const mapStateToProps = ({ newStock }) => {
    return {
        newStock: newStock.stock
    };
};

const mapDispatchToProps = (dispatch, { stockService }) => {
    return bindActionCreators({
        fetchStock: fetchStock(stockService),
        addStock: addStock,
        clearState: clearState
    }, dispatch);
};

export const AddStockPopup = (
    compose(
        withStockService(),
        connect(mapStateToProps, mapDispatchToProps)
    )(ComponentAddStockPopup)
);

ComponentAddStockPopup.propTypes = {
    onClose: PropTypes.func,
    addStock: PropTypes.func,
    fetchStock: PropTypes.func,
    clearState: PropTypes.func,
    newStock: PropTypes.object
}


