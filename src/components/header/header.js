import React from 'react';
import Tab from '../../ui/tab';
import './header.css';

const Header = () => {
    return (
            <div className='header'>
                <div className='name'>
                <h1>stock spreadsheet</h1>
                <h2>track your cashflow</h2>
                </div>
                <div className='holdings info'>
                    <div className='holdings container left'>
                        <span className='holdings'><p>Holdings</p>
                            <p className='holdings total'>$13213.28</p></span>
                    </div>
                    <div className='holdings container right'>
                        <span className='holdings gains'><p>Month's Gain</p><p className='holdings gain'>$240.24 (+5.23%)</p></span>
                        <span className='holdings gains'><p>Total Gain</p><p className='holdings gain'>$1103.94 (+20.83%)</p></span>
                    </div>
                </div>
                <div className='main-menu'>
                    <Tab options={['stocks', 'dividends', 'sectors']} />
                </div>
            </div>
    )
}

export default Header;