import React, { useState } from 'react';
import './button.css';

const Button = (props) => {

  const { type, icon, width, onClick, children, color } = props;

  const insertIcon = icon ? <i className={icon} /> : null;
  const text= children ? <p>{children}</p> : null;
  let className = 'button ';
  if (type) className += type;

  return (
    <button
      className={className}
      onClick={onClick}
      style={{width: `${width}px`, backgroundColor: color}}>
      {insertIcon}
      {text}
    </button>
  );
}

export default Button