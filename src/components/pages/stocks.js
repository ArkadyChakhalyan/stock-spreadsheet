import React from 'react';
import { MiniaturesGains } from '../miniatures';
import Table from '../../ui/table';
import './pages.css';
import StockInfo from '../stock-info';

const Stocks = () => {

    const onClick = () => {
        return {StockInfo}
    }

    return (
        <div>
            <MiniaturesGains />
            <div>
                <h2>stock list</h2>
                <div className='stock-list'>
                    <Table onClick={onClick}/>
                </div>
            </div>
        </div>
    );
};

export default Stocks;