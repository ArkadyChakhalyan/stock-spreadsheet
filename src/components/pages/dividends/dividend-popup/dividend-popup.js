import React from 'react';
import { Button, Input, Popup } from '../../../../ui/';
import PropTypes from 'prop-types';
import styles from './dividend-popup.module.css';

/**
 * Dividend popup.
 * @param {object} props - Props.
 * @param {Function} props.onClose - Dividend popup onClose callback function. 
 * @returns {Element} DividendPopup component.
 */
export const DividendPopup = ({ onClose }) => {

    const onSubmit = () => {
        document.body.style.overflow = 'overlay';
        onClose();
    }

    const head = (
        <div className={styles.head}>
            <p className={styles.company}>January</p>
            <br />
            <p className={styles.ticker}>Dividends recieved in Junary 2021</p>
            <div className={styles.bar}></div>
        </div>
    );
    const inside = (
        <div>
            <div className={styles.inside}>
                <Input label={'Recieved'} value={'15.42'} width={'250'} />
            </div>
            <div className={styles.submit}>
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
