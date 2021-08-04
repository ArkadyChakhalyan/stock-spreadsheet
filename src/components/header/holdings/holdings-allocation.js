import React from 'react';
import './holdings.css';

/**
 * Holdings Allocation.
 * @returns {Element} HoldingsAllocations component.
 */

export const HoldingsAllocation = () => {
    return (
        <div className='holdings info'>
            <div className='holdings container left'>
                <span className='holdings'><p className='top-label'>Number of Holdings</p>
                    <p className='holdings total'>15</p></span>
            </div>
            <table className='holdings container right'>
                <tbody>
                    <tr className='holdings gains'>
                        <td><p>Largest Position</p></td>
                        <td><p className='holdings number'>$240.24 (5.23%)</p></td>
                    </tr>
                    <tr className='holdings gains'>
                        <td><p>Smallest Position</p></td>
                        <td><p className='holdings number'>$110.94 (2.83%)</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
