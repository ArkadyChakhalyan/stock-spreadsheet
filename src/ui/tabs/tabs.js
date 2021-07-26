import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './tabs.css';

const Tabs = ({ options, small }) => {

    let className = 'tab single ';
    let barClassName = 'bar ';

    const [active, setActive] = useState(0);

    if (small) {
        className += 'small ';
        barClassName += 'small';
    }

    const elements = options.map((item, index) => {
        let itemClassName = className;
        if (index === active) {
            itemClassName += 'active';
        }
        if (small) {
            return (
                <div
                    key={index}
                    className={itemClassName}
                    onClick={() => setActive(index)}
                >
                    {item}
                </div>
            )
        }
        return (
            <Link to={`/${item}/`} key={index} >
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
            <span className={barClassName} style={{ left: `${active * (small ? 86 : 126)}px` }} />
        </div>
    );
};

export default Tabs;

