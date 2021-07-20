import React from 'react';
import './buttons.css';

export default function ButtonAdd() {

  function mouseOver(event) {
    let button = event.target.closest('button');
    if (window.timerAdd) {
      clearTimeout(window.timerAdd);
      window.timerAdd = null;
    }
    if (button.lastChild.nodeName == 'P') return;
    let p = document.createElement('p');
    p.innerHTML = 'New Buy';
    button.append(p);
    button.firstChild.style.marginRight = '8px';
  }

   function mouseOut (event) {
    let button = event.target.closest('button');
    let f = () => {
      if (button.lastChild.nodeName != "P") return;
      button.lastChild.remove();
      button.firstChild.style.marginRight = '0px';
    }
    window.timerAdd = setTimeout(f, 250);
  }

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
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}>
      <i class="fas fa-plus fa-sm" />
    </button>
  );
}
