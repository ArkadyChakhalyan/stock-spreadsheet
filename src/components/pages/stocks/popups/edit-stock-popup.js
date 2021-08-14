import React, { useState } from 'react';
import { Popup, Input, Button } from '../../../../ui';
import { editStock } from '../../../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './popup.module.css';

/**
 * Add new stock popup.
 * @param {object} props - Props.
 * @param {Function} props.onClose - Callback function for closing popup.
 * @param {Function} props.editStock - Redux action for additing new stock.
 * @param {object} props.stock - Stock data.
 * @returns {Element} StockPopup component.
 */
const ComponentEditStockPopup = ({ onClose, stock, editStock }) => {

    const close = () => {
        setErrorPrice(false);
        setErrorShares(false);
        setPriceValue(stock.avarageCost);
        setSharesValue(stock.shares);
        onClose();
    }
    
    const [priceValue, setPriceValue] = useState(stock.avarageCost);
    const [sharesValue, setSharesValue] = useState(stock.shares);
    
    const onSubmit = () => {

        let rgx = /^[0-9]*\.?[0-9]*$/;
        
        if (priceValue === '' || sharesValue === '' || errorShares || errorPrice || +sharesValue === 0 || !sharesValue.toString().match(rgx)) return;
    
        stock.avarageCost = Math.round(priceValue * 100) / 100;
        stock.shares = Math.round(sharesValue * 100) / 100;
    
        editStock(stock);
    
        document.body.style.overflow = 'overlay';
        close();
    };
    
    const onKeyPress = (e) => {
        if (e.code === 'Enter') onSubmit();
    };
    
    const head = (
        <div className={styles.headSmall}>
            <p className={styles.company}>{stock.longName}</p>
            <br />
            <p className={styles.ticker}>{stock.symbol}</p>
            <div className={styles.barSmall}></div>
        </div>
    );
    

    const [errorPrice, setErrorPrice] = useState(false);
    const [errorShares, setErrorShares] = useState(false);
    const onBlurPrice = () => {
        let rgx = /^[0-9]*\.?[0-9]*$/;
        if (!priceValue.toString().match(rgx) || priceValue === '') setErrorPrice(true);
    };
    const onFocusPrice = (e) => {
        e.target.select();
        if (errorPrice) setErrorPrice(false);
    };
    const onBlurShares = () => {
        let rgx = /^[0-9]*\.?[0-9]*$/;
        if (!sharesValue.toString().match(rgx) || sharesValue === '') setErrorShares(true);
    };
    const onFocusShares = (e) => {
        e.target.select();
        if (errorShares) setErrorShares(false);
    };
    
    const inside = (
        <div>
            <div className={styles.insideSmall}>
                <Input
                    label={'Price'}
                    value={priceValue}
                    width={'245'}
                    onChange={e => {
                        setPriceValue(e.target.value);
                    }}
                    onBlur={onBlurPrice}
                    onFocus={onFocusPrice}
                    error={errorPrice}
                    errorMessage={'Something went wrong'} />
                <Input
                    label={'Shares'}
                    value={sharesValue}
                    width={'245'}
                    onChange={e => {
                        setSharesValue(e.target.value);
                    }}
                    onBlur={onBlurShares}
                    onFocus={onFocusShares}
                    error={errorShares}
                    errorMessage={'Something went wrong'} />
            </div>
            <div className={styles.submit}>
                <Button onClick={onSubmit} width={'257'}>submit</Button>
            </div>
        </div>
    );

    return (
        <Popup onClose={close} head={head} inside={inside} onKeyPress={onKeyPress} />
    );
}

const mapDispatchToProps = { editStock }

export const EditStockPopup = connect(null, mapDispatchToProps)(ComponentEditStockPopup);

ComponentEditStockPopup.propTypes = {
    onClose: PropTypes.func,
    editStock: PropTypes.func,
    stock: PropTypes.object
}







