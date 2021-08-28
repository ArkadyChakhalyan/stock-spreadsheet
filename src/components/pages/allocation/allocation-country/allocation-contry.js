import React, { useState } from 'react';
import { Fragment } from 'react';
import { Spinner, Table } from '../../../../ui';
import styles from '../allocation.module.css';
import { AllocationContryChart } from './allocation-contry-chart';

export const AllocationContry = ({ allocationContry }) => {

    const [loading, setLoading] = useState(true);

    const load = () => {
        setTimeout(() => {
            setLoading(false)
        }, 450);
        return <Spinner />
    };
    const content = loading ? load() : <AllocationContryChart allocationContry={allocationContry} />;

    return (
        <Fragment>
            <div className={styles.chart}>
                {content}
            </div>
            <Table
                width={'280'}
                collumns={['Sector', 'Contry']}
                data={allocationContry}
                onClick={() => { }} />
        </Fragment>
    )
};