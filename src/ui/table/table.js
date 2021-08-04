import React from 'react';
import PropTypes from 'prop-types';
import './table.css';

/**
 * Table.
 * @param {Function} onClick - Event on tr by click.
 * @param {(string|number)} width - Width of a table.
 * @param {string[]} collumns - Table head collumns.
 * @param {string[]} data - Table data, where one raw is an array.
 * @param {string[]} bottom - Table foot.
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
        return <tr key={index} onClick={onClick}>{raw}</tr>
    });

    return (
        <table className='table' style={{ width: `${width + 'px'}` }}>
            <thead>
                <tr className='head'>
                    {head}
                </tr>
            </thead>
            <tbody>
                {raws}
            </tbody>
            <tfoot className='foot'>
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

