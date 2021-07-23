import React from 'react';
import Tab from '../../ui/tab';
import './menu.css';

const Menu = () => {
    return (
        <div className='menu'>
            <Tab options={['stocks', 'dividends', 'allocation']} />
        </div>
    );
};

export default Menu;