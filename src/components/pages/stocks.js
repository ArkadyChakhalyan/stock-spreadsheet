import React, { useState } from 'react';
import { MiniaturesGains } from '../miniatures';
import Table from '../../ui/table';
import Popup from '../../ui/popup';
import './pages.css';

const Stocks = () => {

    const onClose = () => {
        setPopupOn(false);
        document.body.style.overflow = 'overlay';
    }

    const [popupOn, setPopupOn] = useState(false);
    const popup = popupOn ? <Popup onClose={onClose} /> : null;

    const onClick = () => {
        setPopupOn(true);
    }


    return (
        <div>
            <MiniaturesGains />
            <div>
                <h2>stocklist</h2>
                <div className='stock-list'>
                    {popup}
                    <Table onClick={onClick} width={'1184'} />
                </div>
            </div>
        </div>
    );
};

export default Stocks;
