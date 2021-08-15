import React, { useState, Fragment } from 'react';
import { Popup, Input, Button } from '../../../../ui';
import { addStock, fetchStock } from '../../../../actions';
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
const ComponentAddStockPopup = ({ onClose, addStock, newStock, fetchStock }) => {

    const close = () => {
        setErrorPrice(false);
        setErrorShares(false);
        onClose(newStock);
    }

    const [tickerValue, setTickerValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [sharesValue, setSharesValue] = useState('');

    const onSubmit = () => {

        let rgx = /^[0-9]*\.?[0-9]*$/;
        console.log(newStock)
        if (!newStock) setErrorTicker(true);
        console.log(errorTicker)

        if (tickerValue === '' || priceValue === '' || sharesValue === '' || +sharesValue === 0 || !sharesValue.match(rgx) || errorTicker || errorShares || errorPrice ) return
        
        if (newStock) {
            let ticker = tickerValue;
            let avarageCost = Math.round(priceValue * 100) / 100;
            let shares = Math.round(sharesValue * 100) / 100;
            addStock(newStock, ticker, avarageCost, shares);
        }

        document.body.style.overflow = 'overlay';
        close();
    }

    const [errorTicker, setErrorTicker] = useState(false);
    const [errorPrice, setErrorPrice] = useState(false);
    const [errorShares, setErrorShares] = useState(false);

    const onBlurTicker = () => {
        fetchStock(tickerValue)
        if (tickerValue === '') setErrorTicker(true);
    }
    const onFocusTicker = () => {
        if (errorTicker || newStock) setErrorTicker(false);
    }
    const onBlurPrice = () => {
        let rgx = /^[0-9]*\.?[0-9]*$/;
        if (!priceValue.toString().match(rgx) || priceValue === '') setErrorPrice(true);
    }
    const onFocusPrice = () => {
        if (errorPrice) setErrorPrice(false);
    }
    const onBlurShares = () => {
        let rgx = /^[0-9]*\.?[0-9]*$/;
        if (!sharesValue.toString().match(rgx) || sharesValue === '') setErrorShares(true);
    }
    const onFocusShares = () => {
        if (errorShares) setErrorShares(false);
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
                        setTickerValue(e.target.value)
                    }}
                    onBlur={onBlurTicker}
                    onFocus={onFocusTicker}
                    error={errorTicker}
                    errorMessage={`We coudn't find the ticker`} />
                <Input
                    label={'Price'}
                    width={'242'}
                    onChange={e => {
                        setPriceValue(e.target.value);
                    }}
                    onBlur={onBlurPrice}
                    onFocus={onFocusPrice}
                    error={errorPrice}
                    errorMessage={'Something went wrong'} />
                <Input
                    label={'Shares'}
                    width={'242'}
                    onChange={e => {
                        setSharesValue(e.target.value);
                    }}
                    onBlur={onBlurShares}
                    onFocus={onFocusShares}
                    error={errorShares}
                    errorMessage={'Something went wrong'} />
            </div>
            <div className={styles.submit}>
                <Button onClick={onSubmit} width={'258'}>add</Button>
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
        addStock: addStock
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
    newStock: PropTypes.object
}


