import React, { useState } from 'react';
import { Button, Table } from '../../../../ui/';
import { DividendPopup } from '../dividend-popup';
import './dividends-recieved.css';

/**
 * Dividends recieved table.
 * @returns {Element} DividendsRecieved component.
 */

export const DividendsRecieved = () => {

    const onClose = () => setPopupOn(false);
    const onClick = () => setPopupOn(true)
    const [popupOn, setPopupOn] = useState(false);
    const popup = popupOn ? <DividendPopup onClose={onClose} /> : null;

    return (

        <div className='dividends recieved'>
            {popup}
            <h2>2021</h2>
            <div className='dividends arrows'>
                <Button navigation icon={'fas fa-chevron-left fa-3x'} />
                <Table
                    width={'350'}
                    collumns={['Month', 'Dividends Recieved']}
                    data={[['January', '$15.42'], ['February', '$4255.42'], ['March', '$25.42'], ['April', '$125.42'], ['May', '$35.42'], ['June', '$55.42'], ['July', '$25.42'], ['August', '455.42'], ['September', '$245.42'], ['November', '$125.42'], ['December', '$25.42']]}
                    bottom={['TOTAL', '$2425.42']}
                    onClick={onClick} />
                <Button navigation icon={'fas fa-chevron-right fa-3x'} />
            </div>
        </div>
    )
}