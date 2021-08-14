import React, {useState} from 'react';
import { MiniaturesDividends } from '../miniatures';
import { Button } from '../../../ui/';
import { DividendsPeriod } from './dividends-period';
import { DividendsRecieved } from './dividends-recieved';
import { DividendsSector } from './dividends-sector';
import { connect } from 'react-redux';
import { AddStockPopup } from '../stocks/popups';
import PropTypes from 'prop-types';
import styles from './dividends.module.css';

/**
 * Dividends page.
 * @param {object} props - Props.
 * @param {object[]} props.stocks - Stock list from redux state.
 * @returns {Element} Dividends component.
 */
const ComponentDividends = ({ stocks }) => {

    const onClose = () => {
        setAddStockPopupOn(false);
    }
   
    const [addStockPopupOn, setAddStockPopupOn] = useState(false);
    const addStockPopup = addStockPopupOn ? <AddStockPopup onClose={onClose} /> : null;

    const onAddStock = () => {
        setAddStockPopupOn(true);
    }

    const miniatures = stocks.length > 5 ? <MiniaturesDividends /> : <h2 className={styles.miniatures}>dividend activity</h2>;

    if (stocks.length < 1) return (
        <div className={styles.empty}>
            {miniatures}
            <p className={styles.text}>Add few stocks and fill up how many dividends have been recived</p>
            {addStockPopup}
            <Button icon={'fas fa-plus fa-sm'} width={'240'} color={'var(--color-gain)'} onClick={onAddStock}>
                add new holding
            </Button>
        </div>
    )

    return (
        <div className={styles.page}>
            {miniatures}
            <DividendsPeriod />
            <div className={styles.container}>
                <DividendsRecieved />
                <DividendsSector />
            </div>
        </div>
    );
};

const mapStateToProps = ({ portfolio }) => {
    return {
        stocks: portfolio.stocks,
    };
}

export const Dividends = connect(mapStateToProps, null)(ComponentDividends);

ComponentDividends.propTypes = {
    stocks: PropTypes.array
}