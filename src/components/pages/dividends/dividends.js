import React from 'react';
import { MiniaturesDividends } from '../../miniatures';
import { DividendsPeriod } from './dividends-period';
import { DividendsRecieved } from './dividends-recieved';
import { DividendsSector } from './dividends-sector';
import './dividends.css';

export const Dividends = () => {
    return (
        <div className='dividends container'>
            <MiniaturesDividends />
            <DividendsPeriod />
            <div className='dividends second'>
                <DividendsRecieved />
                <DividendsSector />
            </div>
        </div>
    );
};