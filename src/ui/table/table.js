import React from 'react';
import './table.css';

const Table = (props) => {

    const {onClick} = props;

    return (
        <table className='table'>
            <tr className='head'>
                <th>Name</th>
                <th>Position</th>
                <th>Avarage<br />Price</th>
                <th>Cost</th>
                <th>Price</th>
                <th>Market<br />Value</th>
                <th>Gains/Loses</th>
                <th>Portfolio<br />Allocation</th>
                <th>Yield</th>
                <th>Dividend</th>
                <th>Dividend<br />Income</th>
            </tr>
            <tr onClick={onClick}>
                <td><p className='ticker'>APPL</p><p className='company'>Apple Inc</p></td>
                <td>10</td>
                <td>$120,75</td>
                <td>$1207,50</td>
                <td>$130,84</td>
                <td>$1620,23</td>
                <td className='green-test'>$1103.94 (+20.83%)</td>
                <td>12,25%</td>
                <td>1,02%</td>
                <td>$0,88</td>
                <td>$10,82</td>
            </tr>
            <tr>
                <td><p className='ticker'>APPL</p><p className='company'>Apple Inc</p></td>
                <td>10</td>
                <td>$120,75</td>
                <td>$1207,50</td>
                <td>$130,84</td>
                <td>$1620,23</td>
                <td className='green-test'>$1103.94 (+20.83%)</td>
                <td>12,25%</td>
                <td>1,02%</td>
                <td>$0,88</td>
                <td>$10,82</td>
            </tr>
            <tr>
                <td><p className='ticker'>APPL</p><p className='company'>Apple Inc</p></td>
                <td>10</td>
                <td>$120,75</td>
                <td>$1207,50</td>
                <td>$130,84</td>
                <td>$1620,23</td>
                <td className='green-test'>$1103.94 (+20.83%)</td>
                <td>12,25%</td>
                <td>1,02%</td>
                <td>$0,88</td>
                <td>$10,82</td>
            </tr>
            <tr>
            <td><p className='ticker'>APPL</p><p className='company'>Apple Inc</p></td>
                <td>10</td>
                <td>$120,75</td>
                <td>$1207,50</td>
                <td>$130,84</td>
                <td>$1620,23</td>
                <td className='green-test'>$1103.94 (+20.83%)</td>
                <td>12,25%</td>
                <td>1,02%</td>
                <td>$0,88</td>
                <td>$10,82</td> 
            </tr>
        </table>
    );
};

export default Table;