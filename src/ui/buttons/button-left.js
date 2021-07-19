import React from 'react';
import './buttons.css';

export default function ButtonLeft() {

  function mouseDown(event) {
    let button = event.target.closest('button');
    button.style.color = 'lightgray';
  }

  function mouseUp(event) {
    let button = event.target.closest('button');
    button.style.color = '';
  }

  return (
    <button
      className="button left"
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}>
      <i class="fas fa-angle-left fa-4x"></i>
    </button>
  );
}
