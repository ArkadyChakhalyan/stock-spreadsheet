import React from 'react';
import Menu from '../menu';
import Holdings from '../holdings';
import './header.css';

const Header = () => {
    return (
            <div className='header'>
                <div className='name'>
                <h1>stock<br />spreadsheet</h1>
                <h2>track your cashflow</h2>
                </div>
                <Holdings />
                <Menu  />
            </div>
    )
}

export default Header;