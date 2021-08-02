import React from 'react';
import { Tabs } from '../../../ui';

import './menu.css';

export const Menu = () => {
    return (
        <div className='menu'>
            <Tabs options={['stocks', 'dividends', 'allocation']} />
        </div>
    );
};

