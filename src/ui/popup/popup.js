import React from 'react';
import { Button } from '../';
import './popup.css';

/**
 * popup
 * @param {function} onClose - event for closing a popup by click
 * @param {function} onKeyPress - event on key press
 * @param {ReactElement} head - header component of a popup
 * @param {ReactElement} inside - body component of a popup
 * @returns {ReactElement} popup component
 */

export const Popup = ({ onClose, head, inside, onKeyPress }) => {

    document.body.style.overflow = 'hidden';
    
    const close = () => {
        document.body.style.overflow = 'overlay';
        onClose();
    } 

    return (
        <div className='popup window' onClick={close} onKeyPress={onKeyPress} >
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