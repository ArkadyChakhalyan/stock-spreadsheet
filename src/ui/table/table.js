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
 * @returns {Element} Table component.
 */
export const Table = ({ onClick, width, collumns, data, bottom }) => {

    const head = collumns.map((item, index) => {
        return <th key={index}>{item}</th>
    });

    let foot = null;

    if (bottom) {
        foot = bottom.map((item, index) => {
            return <th key={index}>{item}</th>
        });
    }

    const raws = data.map((item, index) => {
        const raw = item.map((item, index) => {
            return <td key={index} >{item}</td>
        })
        return <tr key={index} onClick={() => onClick(item[1])}>{raw}</tr>
    });

    return (
        <table className={styles.table} style={{ width: `${width + 'px'}` }}>
            <thead>
                <tr className={styles.head}>
                    {head}
                </tr>
            </thead>
            <tbody>
                {raws}
            </tbody>
            <tfoot className={styles.foot}>
                <tr>
                    {foot}
                </tr>
            </tfoot>
        </table>
    );
};

Table.propTypes = {
    onClick: PropTypes.func,
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

