import React from 'react';
import Button from '../button';
import './popup.css';

const Popup = ({ onClose, head, inside }) => {

    document.body.style.overflow = 'hidden';
    
    const close = () => {
        document.body.style.overflow = 'overlay';
        onClose();
    } 

    return (
        <div className='popup window' onClick={close} >
            <div className='rest'>
            </div>
            <div className='bg' onClick={e => { e.stopPropagation() }}>
                {head}
                <span className='close'>
                    <Button type='round' onClick={close} icon={'fas fa-times fa-2x'} />
                </span>
                <span className='info'>
                    {inside}
                </span>
            </div>
        </div>

    );
}

export default Popup;