import React from 'react';
import { Tabs } from '../../../ui';
import './menu.css';

/**
 * Menu.
 * @returns {Element} Menu component.
 */
export const Menu = ({ opened }) => {
    return (
        <div className='menu'>
            <Tabs className='m' options={['stocks', 'dividends', 'allocation']} opened={opened} />
        </div>
    );
};

