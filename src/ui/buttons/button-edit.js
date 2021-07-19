import React from 'react';
import './buttons.css';

export default function ButtonEdit() {

  function mouseOver(event) {
    let button = event.target.closest('button');
    if (window.timerEdit) {
      clearTimeout(window.timerEdit);
      window.timerEdit = null;
    }
    if (button.lastChild.nodeName == 'P') return;
    let p = document.createElement('p');
    p.innerHTML = 'Edit';
    button.append(p);
  }

   function mouseOut (event) {
    let button = event.target.closest('button');
    let f = () => {
      if (button.lastChild.nodeName != "P") return;
      button.lastChild.remove();
    }
    window.timerEdit = setTimeout(f, 150);
  }

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
      className="button edit"
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}>
      <i class="fas fa-pen fa-md" />
    </button>
  );
}
