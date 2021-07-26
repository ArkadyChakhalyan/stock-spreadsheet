import React from 'react';
import Button from '../../../../ui/button';
import Input from '../../../../ui/input';
import Popup from '../../../../ui/popup';
import './dividend-popup.css';

const DividendPopup = ({ onClose }) => {

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

export default DividendPopup;
