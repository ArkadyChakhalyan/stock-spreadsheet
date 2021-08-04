import React from 'react';
import { StockMiniature } from '../../ui';

/**
 * Miniatrues Dividends.
 * @returns {Element} MiniaturesDividends component.
 */

export const MiniaturesDividends = () => {
    return (
        <div>
            <h2>top payers</h2>
            <div className='miniatures'>
            <StockMiniature gain={1} ticker={'appl'} company={'Apple Inc'} number={'$0.88'} percent={'1.29%'}/>
                <StockMiniature gain={1} ticker={'appl'} company={'Apple Inc'} number={'$0.88'} percent={'1.29%'}/>
                <StockMiniature gain={1} ticker={'appl'} company={'Apple Inc'} number={'$0.88'} percent={'1.29%'}/>
                <StockMiniature gain={1} ticker={'appl'} company={'Apple Inc'} number={'$0.88'} percent={'1.29%'}/>
                <StockMiniature gain={1} ticker={'appl'} company={'Apple Inc'} number={'$0.88'} percent={'1.29%'}/>
                <StockMiniature gain={1} ticker={'appl'} company={'Apple Inc'} number={'$0.88'} percent={'1.29%'}/>
            </div>
        </div>
    );
};