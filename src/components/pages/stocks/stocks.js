import React, { useState } from 'react';
import Button from '../../../ui/button';
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
                <Table
                    onClick={onClick}
                    sort
                    width={'1180'}
                    collumns={['Name', 'Ticker', 'Position', 'Avarage Price', 'Cost', 'Price', 'Market Value', 'Gains/Loses', 'Portfolio Allocation', 'Yield', 'Dividend', 'Dividend Income']}
                    data={[['Apple Inc', 'AAPL', '10', '$120.75', '$1207.50', '$130.84', '$1620.23', '$13103.94 +100.83%', '12.25%', '5.02%', '$1.28', '$10.82'], ['Abbot Laborotories', 'ABT', '5', '$126.75', '$560.50', '$240.84', '$1620.23', '$1103.94 +20.83%', '12.25%', '1.02%', '$0.88', '$10.82'], ['Innovative Industrial Properties', 'IIPR', '6', '$212.35', '$1207.50', '$190.84', '$1620.23', '$1103.94 +22.83%', '10.25%', '3.43%', '$10.25', '$100.82']]} />
            </div>
            <br />
            <Button icon={'fas fa-plus fa-sm'} width={'1182'} color={'#007000'}>
                add new holding
            </Button>
        </div>
    );
};

export default Stocks;

