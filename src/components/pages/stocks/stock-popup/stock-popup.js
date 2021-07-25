import React from 'react';
import Popup from '../../../../ui/popup';
import StockInfo from '../stock-info';
import './stock-popup.css';

const StockPopup = ({ onClose }) => {

    const head = (
        <div className='head'>
            <p className='company'>Apple Inc</p>
            <br />
            <p className='ticker'>APPL</p>
            <div className='bar'></div>
        </div>
    );

    const inside = <StockInfo />;

    return (
        <Popup onClose={onClose} head={head} inside={inside} />
    );
}

export default StockPopup;
