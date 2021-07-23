import React from 'react';
import StockMiniature from '../../ui/stock-miniature';
import './miniatures.css';

const MiniaturesDividends = () => {
    return (
        <div>
            <h2>top payers</h2>
            <div className='miniatures'>
            <StockMiniature gain={10} ticker={'appl'} company={'Apple Inc'} number={'$0.88'} percent={'1.29%'}/>
                <StockMiniature gain={10} ticker={'appl'} company={'Apple Inc'} number={'$0.88'} percent={'1.29%'}/>
                <StockMiniature gain={10} ticker={'appl'} company={'Apple Inc'} number={'$0.88'} percent={'1.29%'}/>
                <StockMiniature gain={1} ticker={'appl'} company={'Apple Inc'} number={'$0.88'} percent={'1.29%'}/>
                <StockMiniature gain={1} ticker={'appl'} company={'Apple Inc'} number={'$0.88'} percent={'1.29%'}/>
                <StockMiniature gain={1} ticker={'appl'} company={'Apple Inc'} number={'$0.88'} percent={'1.29%'}/>
            </div>
        </div>
    );
};

export default MiniaturesDividends;