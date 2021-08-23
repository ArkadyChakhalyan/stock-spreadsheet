import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

/**
 * Button.
 * @param {object} props - Props.
 * @param {Function} props.onClick - Event on button click.
 * @param {string} props.children - Labal of a button.
 * @param {(string|number)} props.width - Width of a button.
 * @param {boolean} props.navigation - Small button without borders on true.
 * @param {string} props.icon - Icon name from font-awesome.
 * @param {string} props.color - Background color of a button.
 * @param {boolean} props.disabled - Disabled button.
 * @returns {Element} Button component.
 */
export const Button = ({ navigation, icon, width, onClick, children, color, disabled }) => {

  const insertIcon = icon ? <i className={`${icon} ${styles.icon}`} /> : null;
  const text = children ? <p className={styles.text}>{children}</p> : null;
  let className = `${styles.button} `;
  if (navigation) className += styles.round;

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      style={{ width: `${width}px`, backgroundColor: color }}>
      {insertIcon}
      {text}
    </button>
  );
}

Button.propTypes = {
  navigation: PropTypes.bool,
  icon: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onClick: PropTypes.func,
  children: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool
}