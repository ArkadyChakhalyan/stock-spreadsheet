import React, { useState } from 'react';
import Table from '../../../ui/table';
import { MiniaturesGains } from '../../miniatures';
import StockPopup from './stock-popup';

const Stocks = () => {

    const onClose = () => {
        setPopupOn(false);
    }

    const [popupOn, setPopupOn] = useState(false);
    const popup = popupOn ? <StockPopup onClose={onClose} /> : null;

    const onClick = () => {
        setPopupOn(true);
    }


    return (
        <div>
            <MiniaturesGains />
            <div className='stock-list'>
                {popup}
                <Table onClick={onClick} width={'1180'} />
            </div>
        </div>
    );
};

export default Stocks;
