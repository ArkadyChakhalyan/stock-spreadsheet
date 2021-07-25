import React from 'react';
import { MiniaturesDividends } from '../../miniatures';
import DividendsPeriod from './dividends-period';
import './dividends.css';

const Dividends = () => {
    return (
        <div className='dividends container'>
            <MiniaturesDividends />
            <DividendsPeriod />
            <div>
             
            </div>
        </div>
    );
};

export default Dividends;