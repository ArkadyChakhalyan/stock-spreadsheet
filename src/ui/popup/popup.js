import React from 'react';
import { Button } from '../';
import PropTypes from 'prop-types';
import styles from './popup.module.css';

/**
 * Popup.
 * @param {object} props - Props.
 * @param {Function} props.onClose - Event for closing a popup by click.
 * @param {Function} props.onKeyPress - Event on key press.
 * @param {Element} props.head - Header component of a popup.
 * @param {Element} props.inside - Body component of a popup.
 * @returns {Element} Popup component.
 */
export const Popup = ({ onClose, head, inside, onKeyPress }) => {

    document.body.style.overflow = 'hidden';

    const close = () => {
        document.body.style.overflow = 'overlay';
        onClose();
    }

    return (
        <div className={styles.popup} onClick={close} onKeyPress={onKeyPress}>
            <div className={styles.content}>
            </div>
            <div className={styles.bg} onClick={e => e.stopPropagation()}>
                {head}
                <span className={styles.close}>
                    <Button navigation onClick={close} icon={'fas fa-times fa-2x'} />
                </span>
                <span className={styles.inside}>
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