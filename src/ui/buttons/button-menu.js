import React from 'react';
import './buttons.css';

const ButtonMenu = (props) => {
  const {menu1, menu2, menu3} = props;

  return (
    <div>
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
