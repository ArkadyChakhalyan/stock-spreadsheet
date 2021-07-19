import React from 'react';
import './buttons.css';

export default function ButtonDelete() {

  function mouseOver(event) {
    let button = event.target.closest('button');
    if (window.timerDelete) {
      clearTimeout(window.timerDelete);
      window.timerDelete = null;
    }
    if (button.lastChild.nodeName == 'P') return;
    let p = document.createElement('p');
    p.innerHTML = 'Delete';
    button.append(p);
  }

   function mouseOut (event) {
    let button = event.target.closest('button');
    let f = () => {
      if (button.lastChild.nodeName != "P") return;
      button.lastChild.remove();
    }
    window.timerDelete = setTimeout(f, 150);
  }

  function mouseDown(event) {
    let button = event.target.closest('button');
    button.style.color = '#AE1E3B';
  }

  function mouseUp(event) {
    let button = event.target.closest('button');
    button.style.color = '';
  }

  return (
    <button 
      className="button delete"
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}>
      <i class="fas fa-trash fa-md" />
    </button>
  );
}
