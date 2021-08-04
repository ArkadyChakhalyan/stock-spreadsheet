import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Button.
 * @param {Function} onClick - Event on button click.
 * @param {string} children - Labal of a button.
 * @param {(string|number)} width - Width of a button.
 * @param {boolean} navigation - Small button without borders on true.
 * @param {string} icon - Icon name from font-awesome.
 * @param {string} color - Background color of a button.
 * @returns {Element} Button component.
 */

export const Button = ({ navigation, icon, width, onClick, children, color }) => {

  const insertIcon = icon ? <i className={icon} /> : null;
  const text = children ? <p>{children}</p> : null;
  let className = 'button ';
  if (navigation) className += 'round';

  return (
    <button
      className={className}
      onClick={onClick}
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
}