import React from 'react';
import './table.css';

/**
 * table
 * @param {function} onClick - event on tr by click
 * @param {(string|number)} width - width of a table
 * @param {string[]} collumns - table head collumns
 * @param {array[string[]]} data - table data, where one raw is an array
 * @param {string[]} bottom - table foot
 * @returns {ReactElement} table component
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

