import React from 'react';
import Tabs from '../../../ui/tabs';
import './menu.css';

const Menu = () => {
    return (
        <div className='menu'>
            <Tabs options={['stocks', 'dividends', 'allocation']} />
        </div>
    );
};

export default Menu;