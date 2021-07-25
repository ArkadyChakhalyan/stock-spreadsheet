import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './tabs.css';

const Tabs = ({ options, small }) => {

    let className = 'tab single ';
    let barClassName = 'bar ';
    let key = 0;
    const [active, setActive] = useState(0);

    if (small) {
        className += 'small ';
        barClassName += 'small';
    }

    const elements = options.map((item, index) => {
        key++;
        let itemClassName = className;
        if (index === active) {
            itemClassName += 'active';
        }
        if (small) {
            return (
                <div
                    ket={key}
                    className={itemClassName}
                    onClick={() => setActive(index)}
                >
                    {item}
                </div>
            )
        }
        return (
            <Link to={`/${item}/`} key={key} >
                <div
                    className={itemClassName}
                    onClick={() => setActive(index)}
            >
                    {item}
                </div>
            </Link>
        )
    });

    return (
        <div className='tab'>
            {elements}
            <span className={barClassName} style={{ left: `${active * (small ? 86 : 126) }px` }} />
        </div>
    );
};

export default Tabs;


