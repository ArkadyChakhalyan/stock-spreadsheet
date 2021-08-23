import React, { useState } from 'react';
import { Fragment } from 'react';
import { Spinner, Table } from '../../../../ui';
import styles from '../allocation.module.css';

export const AllocationSector = ({ allocationSector }) => {
    const [loading, setLoading] = useState(true);

    const load = () => {
        setTimeout(() => {
            setLoading(false)
        }, 450);
        return <Spinner />
    };

    const content = loading ? load() : 'allocation by sector';

    return (
        <Fragment>
            <div className={styles.chart}>{content}</div>
            <Table
                width={'280'}
                collumns={['Sector', 'Allocation']}
                data={allocationSector}
                onClick={() => { }} />
        </Fragment>
    )
};