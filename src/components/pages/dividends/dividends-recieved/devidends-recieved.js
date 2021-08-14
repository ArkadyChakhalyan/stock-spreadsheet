import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Table } from '../../../../ui/';
import { DividendPopup } from '../dividend-popup';
import PropTypes from 'prop-types';
import { addDividend, addYear } from '../../../../actions';
import styles from './dividends-recieved.module.css';

/**
 * Dividends recieved table.
 * @param {object} props - Props.
 * @param {string[]} props.dividendsRecieved - Dividends recieved data by year and monthly.
 * @param {Function} props.addYear - Redux action for adding year for when dividends has been recieved.
 * @param {Function} props.addDividend - Redux action for adding dividend recieved a month.
 * @returns {Element} DividendsRecieved component.
 */
export const ComponentDividendsRecieved = ({ dividendsRecieved, addYear, addDividend }) => {

    const onClose = () => {
        setPopupOn(false);
        const data = (dividendsRecieved.find((item) => item[0] === year))
        console.log(data)
    }
    const onClick = (dividend) => {
        setDividendAmount(dividend[1]);
        setMonth(dividend[0]);
        setPopupOn(true);
    };

    const date = new Date();
    let [year, setYear] = useState(date.getFullYear());
    const tableData = dividendsRecieved.find((item) => item[0] === year)[1];
    const total = dividendsRecieved.find((item) => item[0] === year)[2];
    const [dividendAmount, setDividendAmount] = useState('');
    const [month, setMonth] = useState('');
    const [popupOn, setPopupOn] = useState(false);
    const popup = popupOn ? <DividendPopup onClose={onClose} addDividend={addDividend} month={month} year={year} dividendAmount={dividendAmount}/> : null;
    
    const leftClick = () => {
        setYear(year -= 1);
        addYear((year - 1));
    };

    const rightClick = () => {
        if (year === date.getFullYear()) return
        setYear(year += 1);
    };

    return (

        <div className={styles.container}>
            {popup}
            <h2>{year}</h2>
            <div className={styles.arrows}>
                <Button navigation icon={'fas fa-chevron-left fa-3x'} onClick={leftClick} />
                <Table
                    width={'350'}
                    collumns={['Month', 'Dividends Recieved']}
                    data={tableData}
                    bottom={['TOTAL', `$${total}`]}
                    onClick={onClick} />
                <Button navigation icon={'fas fa-chevron-right fa-3x'} onClick={rightClick} />
            </div>
        </div>
    )
}

const mapStateToProps = ({ dividends }) => {
    return {
        dividendsRecieved: dividends.dividendsRecieved
    }
};

const mapDispatchToProps = ({ addDividend, addYear });

export const DividendsRecieved = connect(mapStateToProps, mapDispatchToProps)(ComponentDividendsRecieved);

ComponentDividendsRecieved.propTypes = {
    dividendsRecieved: PropTypes.array,
    addYear: PropTypes.func,
    addDividend: PropTypes.func
}