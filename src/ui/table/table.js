import React from 'react';
import PropTypes from 'prop-types';
import styles from './table.module.css';

/**
 * Table.
 * @param {object} props - Props.
 * @param {Function} props.onClick - Event on tr by click.
 * @param {(string|number)} props.width - Width of a table.
 * @param {string[]} props.collumns - Table head collumns.
 * @param {string[]} props.data - Table data, where one raw is an array.
 * @param {string[]} props.bottom - Table foot.
 * @param {boolean} props.onlyDesktop - No CSS changes in mobile version.
 * @returns {Element} Table component.
 */
export const Table = ({ onClick, width, collumns, data, bottom, onlyDesktop }) => { 

    const head = collumns.map((item, index) => {
        return <div key={index} className={styles.th}>{item}</div>
    });

    let foot = null;

    if (bottom) {
        foot = bottom.map((item, index) => {
            return <div key={index} className={styles.th}>{item}</div>
        });
    }

    const rows = data.map((item, index) => {
        const row = item.map((item, index) => {
            return <div key={index} className={styles.td}>{item}</div>
        });
        return <div className={styles.tr} key={index} onClick={() => onClick(item)}>{row}</div>
    });

    let tableClassName = styles.table;
    if (onlyDesktop) tableClassName = styles.tableOnlyDesktop

    return (
        <div className={tableClassName} style={{ width: `${width + 'px'}`}}>
            <div className={styles.thead}>
                <div className={styles.tr}>
                    {head}
                </div>
            </div>
            <div className={styles.tbody}>
                {rows}
            </div>
            <div className={styles.tfoot}>
                <div className={styles.tr}>
                    {foot}
                </div>
            </div>
        </div>
    )
};

Table.propTypes = {
    onClick: PropTypes.func,
    onlyDesktop: PropTypes.bool,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    collumns: PropTypes.arrayOf(PropTypes.string),
    data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]))),
    bottom: PropTypes.arrayOf(PropTypes.string)
}

