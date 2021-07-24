import React from 'react';
import StockMiniature from '../../ui/stock-miniature';
import './miniatures.css';

const MiniaturesGains = () => {
    return (
        <div>
            <h2>top movers</h2>
            <div className='miniatures'>
            <StockMiniature gain={10} ticker={'appl'} company={'Apple Inc'} number={'$120.52'} percent={'2.29%'}/>
                <StockMiniature gain={10} ticker={'appl'} company={'Apple Inc'} number={'$120.52'} percent={'2.29%'}/>
                <StockMiniature gain={10} ticker={'appl'} company={'Apple Inc'} number={'$120.52'} percent={'2.29%'}/>
                <StockMiniature gain={-5} ticker={'appl'} company={'Apple Inc'} number={'$120.52'} percent={'2.29%'}/>
                <StockMiniature gain={-5} ticker={'appl'} company={'Apple Inc'} number={'$120.52'} percent={'2.29%'}/>
                <StockMiniature gain={-5} ticker={'appl'} company={'Apple Inc'} number={'$120.52'} percent={'2.29%'}/>
            </div>
        </div>
    );
};

export default MiniaturesGains;
