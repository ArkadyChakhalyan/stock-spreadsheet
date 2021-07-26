import React from 'react';
import Popup from '../../../../ui/popup';
import StockInfo from '../stock-info';
import './stock-popup.css';

const StockPopup = ({ onClose }) => {

    const head = (
        <div className='stock head'>
            <p className='stock company'>Apple Inc</p>
            <br />
            <p className='stock ticker'>APPL</p>
            <div className='stock bar'></div>
        </div>
    );

    const inside = <div className='stock info'><StockInfo onDeleteStock={onClose} /></div>;

    return (
        <Popup onClose={onClose} head={head} inside={inside} />
    );
}

export default StockPopup;
