import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './tabs.module.css';

/**
 * Tabs.
 * @param {object} props - Props.
 * @param {string[]} props.options - Tabs.
 * @param {boolean} props.small - Creates small version.
 * @returns {Element} Tabs component.
 */
export const Tabs = ({ options, small, opened }) => {

    let className = `${styles.tab} ${styles.single} `;
    let barClassName = `${styles.bar} `;

    let activeTab = 0;
    if (!small) {
        activeTab = options.indexOf(opened) > -1 ? options.indexOf(opened) : 0;
    }

    const [active, setActive] = useState(activeTab);

    if (small) {
        className += `${styles.smalltab} `;
        barClassName += `${styles.smallbar} `;
    }

    const elements = options.map((item, index) => {
        let itemClassName = className;
        if (index === active) {
            itemClassName += styles.active;
        }
        if (small) {
            return (
                <Link to={`${item}`} key={index} >
                    <div
                        className={itemClassName}
                        onClick={() => setActive(index)}
                    >
                        {item}
                    </div>
                </Link>
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
        <div className={styles.tab}>
            {elements}
            <span className={barClassName} style={{ left: `${active * (small ? 86 : 126)}px` }} />
        </div>
    );
};

Tabs.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    small: PropTypes.bool
}


