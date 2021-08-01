import React from 'react';
import './table.css';
/**
 * 
 * @param {Object} props 
 * @returns 
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

