import React from 'react';
import { Button } from '../';
import PropTypes from 'prop-types';
import './popup.css';

/**
 * Popup.
 * @param {Function} onClose - Event for closing a popup by click.
 * @param {Function} onKeyPress - Event on key press.
 * @param {Element} head - Header component of a popup.
 * @param {Element} inside - Body component of a popup.
 * @returns {Element} Popup component.
 */

export const Popup = ({ onClose, head, inside, onKeyPress }) => {

    document.body.style.overflow = 'hidden';
    
    const close = () => {
        document.body.style.overflow = 'overlay';
        onClose();
    } 

    let classNameWindow = 'popup window ';
    let classNamePopup = 'bg ';
    if (top) {
        classNameWindow += 'top';
        classNamePopup += 'top';
    }

    return (
        <div className={classNameWindow} onClick={close} onKeyPress={onKeyPress}>
            <div className='rest'>
            </div>
            <div className={classNamePopup} onClick={e => { e.stopPropagation() }}>
                {head}
                <span className='close'>
                    <Button navigation onClick={close} icon={'fas fa-times fa-2x'} />
                </span>
                <span className='info'>
                    {inside}
                </span>
            </div>
        </div>

    );
}

Popup.propTypes = {
    onClose: PropTypes.func,
    onKeyPress: PropTypes.func,
    head: PropTypes.element,
    inside: PropTypes.element,
}