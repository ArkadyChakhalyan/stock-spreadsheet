import React from 'react';
import StockMiniature from '../../ui/stock-miniature';
import './miniatures.css';

const MiniaturesAllocation = () => {
    return (
        <div>
            <h2>largest holdings</h2>
            <div className='miniatures'>
                <StockMiniature gain={1} ticker={'appl'} company={'Apple Inc'} number={'$1120.52'} percent={'2.29%'}/>
                <StockMiniature gain={1} ticker={'appl'} company={'Apple Inc'} number={'$1120.52'} percent={'2.29%'}/>
                <StockMiniature gain={1} ticker={'appl'} company={'Apple Inc'} number={'$1120.52'} percent={'2.29%'}/>
                <StockMiniature gain={1} ticker={'appl'} company={'Apple Inc'} number={'$1120.52'} percent={'2.29%'}/>
                <StockMiniature gain={1} ticker={'appl'} company={'Apple Inc'} number={'$1120.52'} percent={'2.29%'}/>
                <StockMiniature gain={1} ticker={'appl'} company={'Apple Inc'} number={'$1120.52'} percent={'2.29%'}/>
            </div>
        </div>
    );
};

export default MiniaturesAllocation;