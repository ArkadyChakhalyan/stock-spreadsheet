import React from 'react';
import Table from '../../../ui/table';
import { MiniaturesAllocation } from '../../miniatures';
import './allocation.css';

const Allocation = () => {
    return (
        <div>
            <MiniaturesAllocation />
            <div className='allocation container'>
                <div className='chart'></div>
                <Table 
                    width={'280'}
                    collumns={['Sector', 'Allocation']}
                    data={[['IT', '12%'], ['Communication', '9%'], ['Consumer Defensive', '9%'], ['Consumer Cyclical', '8%'], ['Industrial', '5%'], ['Healthcare', '5%'],['Financial', '5%'], ['Real Estate', '5%'], ['Energy', '4%'], ['Basic Materials', '2%'], ['Utilities', '1%']]} />
            </div>
        </div>
    );
};

export default Allocation;