import React, { useState } from 'react';
import './table.css';

const Table = ({ onClick, width, collumns, data, bottom, sort }) => {

    const head = collumns.map((item, index) => {
        return <th key={index}>{item}</th>
    });

    let foot = null;

    if (bottom) {
        foot = bottom.map((item, index) => {
            return <th key={index}>{item}</th>
        });
    }

    let sortedData = [...data]

    const [view, setView] = useState(data);

    let className = 'head ';

    const onSort = (e) => {
        let idx = collumns.indexOf(e.target.innerHTML);

        sortedData.sort((a, b) => {
            if (a[idx] > b[idx]) return 1;
            if (a[idx] < b[idx]) return -1;
            return 0;
        });
        if (sortedData[0][idx] === view[0][idx]) {
            sortedData.sort((a, b) => {
                if (a[idx] < b[idx]) return 1;
                if (a[idx] > b[idx]) return -1;
                return 0;
            });


            if (sortedData[0][idx] === view[0][idx]) {
                sortedData.sort((a, b) => b[idx] - a[idx]);
            }
        }

        setView(sortedData);
    }

    let sortable;

    if (sort) {
        sortable = onSort;
        className += 'sort'
    }

    const raws = view.map((item, index) => {
        const raw = item.map((item, index) => {
            return <td key={index} >{item}</td>
        })
        return <tr key={index} onClick={onClick}>{raw}</tr>
    });

    return (
        <table className='table' style={{ width: `${width + 'px'}` }}>
            <thead onClick={sortable}>
                <tr className={className}>
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


export default Table;
