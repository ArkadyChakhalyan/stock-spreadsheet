import React, { useState } from 'react';
import { Popup, Input, Button } from '../../../../ui';
import { addStock } from '../../../../actions';
import { withStockService } from '../../../hoc';
import { connect } from 'react-redux';
import { compose } from '../../../../utils';
import PropTypes from 'prop-types';
import styles from './popup.module.css';

/**
 * Add new stock popup.
 * @param {object} props - Props.
 * @param {Function} props.onClose - Callback function for closing popup.
 * @param {Function} props.addStock - Redux action fro additing new stock.
 * @param {object} props.stockService - Stock API service.
 * @returns {Element} StockPopup component.
 */
const ComponentAddStockPopup = ({ onClose, stockService, addStock }) => {

    const close = () => {
        setErrorPrice(false);
        setErrorShares(false);
        onClose();
    }

    const [tickerValue, setTickerValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [sharesValue, setSharesValue] = useState('');

    let newStock;

    const onSubmit = () => {

        newStock = stockService.getStock(tickerValue);

        let rgx = /^[0-9]*\.?[0-9]*$/;

        if (tickerValue === '' || priceValue === '' || sharesValue === '' || +sharesValue === 0 || !sharesValue.match(rgx) || errorTicker || errorShares || errorPrice) return

        if (newStock) {
            newStock.avarageCost = Math.round(priceValue * 100) / 100;
            newStock.shares = Math.round(sharesValue * 100) / 100;
            addStock(newStock);
        }

        document.body.style.overflow = 'overlay';
        close();
    }

    const [inputTickerValue, setInputTickerValue] = useState('');
    const [inputPriceValue, setInputPriceValue] = useState('');
    const [inputSharesValue, setInputSharesValue] = useState('');
    const [errorTicker, setErrorTicker] = useState(false);
    const [errorPrice, setErrorPrice] = useState(false);
    const [errorShares, setErrorShares] = useState(false);

    const onBlurTicker = () => {
        newStock = stockService.getStock(inputTickerValue);
        if (!newStock) setErrorTicker(true);
    }
    const onFocusTicker = () => {
        if (errorTicker) setErrorTicker(false);
    }
    const onBlurPrice = () => {
        let rgx = /^[0-9]*\.?[0-9]*$/;
        if (!inputPriceValue.match(rgx)) setErrorPrice(true);
    }
    const onFocusPrice = () => {
        if (errorPrice) setErrorPrice(false);
    }
    const onBlurShares = () => {
        let rgx = /^[0-9]*\.?[0-9]*$/;
        if (!inputSharesValue.match(rgx) || '') setErrorShares(true);
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
        <div>
            <form className={styles.insideSmall}>
                <Input
                    label={'Ticker'}
                    width={'242'}
                    onChange={e => {
                        setInputTickerValue(e.target.value);
                        setTickerValue(e.target.value)}}
                    onBlur={onBlurTicker}
                    onFocus={onFocusTicker}
                    error={errorTicker}
                    errorMessage={`We coudn't find the ticker`} />
                <Input
                    label={'Price'}
                    width={'242'}
                    onChange={e => {
                        setInputPriceValue(e.target.value)
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
                        setInputSharesValue(e.target.value)
                        setSharesValue(e.target.value);
                    }}
                    onBlur={onBlurShares}
                    onFocus={onFocusShares}
                    error={errorShares}
                    errorMessage={'Something went wrong'} />
            </form>
            <div className={styles.submit}>
                <Button onClick={onSubmit} width={'258'}>add</Button>
            </div>
        </div>
    );

    const onKeyPress = (e) => {
        if (e.code === 'Enter') onSubmit();
    }

    return (
        <Popup onClose={close} head={head} inside={inside} onKeyPress={onKeyPress} />
    );
}

const mapDispatchToProps = { addStock }

export const AddStockPopup = (
    compose(
        withStockService(),
        connect(null, mapDispatchToProps)
    )(ComponentAddStockPopup)
);

ComponentAddStockPopup.propTypes = {
    onClose: PropTypes.func,
    addStock: PropTypes.func,
    stockService: PropTypes.object
}


