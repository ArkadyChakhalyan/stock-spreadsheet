import React from 'react';
import Button from '../button';
import StockInfo from '../../components/stock-info';
import './popup.css';

const Popup = ({ onClose, opacity }) => {

    document.body.style.overflow = 'hidden';

    return (
        <div className='popup window' onClick={onClose} style={{ opacity: opacity }}>
            <div className='rest'>
            </div>
            <div className='bg' onClick={e => { e.stopPropagation() }}>
                <div className='head'>
                    <p className='company'>Apple Inc</p>
                    <br />
                    <p className='ticker'>APPL</p>
                    <div className='bar'></div>
                </div>
                <span className='close'>
                    <Button type='round' onClick={onClose} icon={'fas fa-times fa-2x'} />
                </span>
                <span className='info'>
                    <StockInfo />
                </span>
            </div>
        </div>

    );
}

export default Popup;