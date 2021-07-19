import React from 'react';
import './buttons.css';

export default function ButtonClose({ children }) {

  function mouseDown(event) {
    let button = event.target.closest('button')
    button.style.background = '#AE1E3B';
    button.style.borderColor = '#AE1E3B';
  }

  function mouseUp(event) {
    let button = event.target.closest('button')
    button.style.background = '';
    button.style.borderColor = '#D2222D';
  }

  return (
    <button
      className="button close"
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}>
      <i class="fas fa-times fa-lg" />
    </button>
  );
}
