import React from 'react';
import { Button, Input, Popup } from '../../../../ui/';
import PropTypes from 'prop-types';
import './dividend-popup.css';

/**
 * Dividend popup.
 * @returns {Element} DividendPopup component.
 */

export const DividendPopup = ({ onClose }) => {

    const onSubmit = () => {
        document.body.style.overflow = 'overlay';
        onClose();
    }

    const head = (
        <div className='dividend head'>
            <p className='dividend company'>January</p>
            <br />
            <p className='dividend ticker'>Dividends recieved in Junary 2021</p>
            <div className='dividend bar'></div>
        </div>
    );

    const inside = (
        <div>
            <div className='dividend info'>
                <Input label={'Recieved'} value={'15.42'} width={'250'} />
            </div>
            <div className='dividend submit'>
                <Button onClick={onSubmit} width={'262'}>submit</Button>
            </div>
        </div>
    );

    return (
        <Popup onClose={onClose} head={head} inside={inside} />
    );
}

DividendPopup.propTypes = {
    onClose: PropTypes.func
}
