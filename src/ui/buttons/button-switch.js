import React from 'react';
import './buttons.css';

const ButtonSwitch = (props) => {
    const { opt1, opt2 } = props;

    function onClick(e) {
        let button = document.getElementsByClassName('switch-selected')[0];
        let p1 = document.getElementsByClassName('switch switch-text')[0].firstChild;
        let p2 = document.getElementsByClassName('switch switch-text')[0].lastChild;
        if (e.target == button || e.target.style.color == 'white') return;
        if (button.style.transform == 'translateX(100%)') {
            button.style.transform = 'translateX(0%)';
            p1.style.color = 'white';
            p2.style.color = 'lightgray';
        }
        else {
            button.style.transform = 'translateX(100%)';
            p2.style.color = 'white';
            p1.style.color = 'lightgray';
        }
    }
    
    function prevent (e) {
        e.preventDefault();
    }

    return (
        <div
            className='switch switch-bg'
            onClick={onClick}
            onMouseDown={prevent}>
            <div className='switch switch-selected'></div>
            <span className='switch switch-text'>
                <p style={{color:'white'}}>{opt1}</p>
                <p>{opt2}</p>
            </span>
        </div >
    );
}

export default ButtonSwitch;

