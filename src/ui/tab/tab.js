import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './tab.css';

const Tab = ({ options, type }) => {

    const onClick = (e) => {
        if (active) active.className = className;
        active = e.target;
        // setLeft(active.id * 126);
        // setLeft(active.id * 86);
        active.className += 'active';

    };

    // как сделать первый элемент сразу активным
    // как передвигать слайдер, юз стейт теряет переменные
    let active
    let className = 'tab single ';
    let barClassName = 'bar ';
    let id = -1;
    let left = 0;
    // const [left, setLeft] = useState(0);
    if (type) {
        className += 'small ';
        barClassName += 'small';
    }

    const elements = options.map((item) => {
        id++
        return (
            <Link to={`/${item}/`}>
                <div
                    className={className}
                    id={id}
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