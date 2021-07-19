import React from 'react';
import './buttons.css';

const ButtonSwitch = (props) => {
  const {opt1, opt2} = props;

  function onClick(event) {
    if (event.target.className == "button switch switch-left") {
        event.target.style.background = 'dodgerblue';
        document.getElementsByClassName("button switch switch-right")[0].style.background = '';
    }
    else {
        event.target.style.background = 'dodgerblue';
        document.getElementsByClassName("button switch switch-left")[0].style.background = '';
    }
    
  }

  return (
    <div onClick={onClick}>
      <button className="button switch switch-left">
        {opt1}
      </button>
      <button className="button switch switch-right">
        {opt2}
      </button>
    </div>
  );
}

export default ButtonSwitch;
