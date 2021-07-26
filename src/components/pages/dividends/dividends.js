import React from 'react';
import { MiniaturesDividends } from '../../miniatures';
import DividendsPeriod from './dividends-period';
import './dividends.css';
import DividendsRecieved from './dividends-recieved';
import DividendsSector from './dividends-sector';

const Dividends = () => {

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

export default Dividends;