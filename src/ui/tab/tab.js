import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './tab.css';

const Tab = ({ options, type }) => {

    const onClick = (e) => {
        // if (active) active.className = className;
        // active = e.target;
        
        setLeft(e.target.id * (type ? 86 : 126));

        e.target.className += 'active';
    };

    // let active;
    let prev;
    let className = 'tab single ';
    let barClassName = 'bar ';
    let key = 0;
    let id = -1;
    const [left, setLeft] = useState(0);
    const [active, setActive] = useState('false');

    if (type) {
        className += 'small ';
        barClassName += 'small';
    }

    const elements = options.map((item) => {
        id++;
        key++;
        if (type) {
            return (
                    <div
                        id={id}
                        ket={key}
                        className={className}
                        onClick={onClick}>
                        {item}
                    </div>
            )
        }
        return (
            <Link to={`/${item}/`} key={key} >
                <div
                    id={id}
                    className={className}
                    onClick={onClick}>
                    {item}
                </div>
            </Link>
        )
    });

    return (
        <div className='tab'>
            {elements}
            <span className={barClassName} style={{ left: `${left}px` }} />
        </div>
    );
};

export default Tab;


