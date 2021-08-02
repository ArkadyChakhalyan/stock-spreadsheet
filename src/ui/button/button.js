import React from 'react';
import './button.css';

/**
 * button
 * @param {function} onClick - event on button click
 * @param {string} children - labal of a button
 * @param {(string|number)} width - width of a button
 * @param {boolean} type - small button without borders on true
 * @param {string} icon - icon name from font-awesome
 * @param {string} color - background color of a button
 * @returns {ReactElement} button component
 */

export const Button = ({ type, icon, width, onClick, children, color }) => {

  const insertIcon = icon ? <i className={icon} /> : null;
  const text = children ? <p>{children}</p> : null;
  let className = 'button ';
  if (type) className += type;

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