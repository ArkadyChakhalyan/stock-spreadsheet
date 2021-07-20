import React from 'react';
import './buttons.css';

const ButtonMenu = (props) => {
  const {menu1, menu2, menu3} = props;

  function mouseDown(event) {
    let button = event.target.closest('button')
    button.style.background = 'rgb(24, 121, 218)';
    return false;
  }

  function mouseUp(event) {
    let button = event.target.closest('button')
    button.style.background = '';
  }

  return (
    <div onMouseUp={mouseUp} onMouseDown={mouseDown}>
      <button className="button menu menu-left">
        {menu1}
      </button>
      <button className="button menu menu-middle">
        {menu2}
      </button>
      <button className="button menu menu-right">
        {menu3}
      </button>
    </div>
  );
}

export default ButtonMenu;
