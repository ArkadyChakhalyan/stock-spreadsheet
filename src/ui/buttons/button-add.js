import React from 'react';
import './buttons.css';

export default function ButtonAdd() {

  function mouseDown(event) {
    let button = event.target.closest('button')
    button.style.background = '#007000';
    button.style.borderColor = '#007000';
    event.preventDefault();
    return false;
  }

  function mouseUp(event) {
    let button = event.target.closest('button')
    button.style.background = '';
    button.style.borderColor = '#238823';
  }

  return (
    <button
      className="button add"
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}>
      <i class="fas fa-plus fa-sm" />
      <p>New buy</p>
    </button>
  );
}
