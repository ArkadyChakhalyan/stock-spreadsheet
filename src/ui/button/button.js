import React, { useState } from 'react';
import './button.css';

const Button = (props) => {

  const { type, icon, width, onClick, children, color } = props;
  
  const insertIcon = icon ? <i class={icon} /> : null;
  const text= children ? <text>{children}</text> : null;
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