import React from 'react';
import PropTypes from 'prop-types';
import { Holdings } from './holdings';
import styles from './stock-info.module.css';
import { SalesChart } from './sales-chart/sales-chart';
import { PriceChart } from './price-chart/price-chart';

/**
 * Stock's info page inside stock popup.
 * @param {object} props - Props.
 * @param {Function} props.onDeleteStock - Callback function for closing stock popup.
 * @param {object} props.stock - Stock data.
 * @returns {Element} StockInfo component.
 */
export const StockInfo = ({ stock, onDeleteStock }) => {

    return (
        <div className={styles.container}>
            <Holdings stock={stock} onDeleteStock={onDeleteStock} />
            <PriceChart stock={stock}/>
            <div className={styles.valuation}>
                <div>
                    <p className={styles.group}>Valutaion</p>
                    <span className={styles.line}><p className={styles.label}>Market Cap</p><p className={styles.number}>{stock.marketCap}</p></span>
                    <span className={styles.line}><p className={styles.label}>Enterprise Value</p><p className={styles.number}>{stock.enterpriseValue}</p></span>
                    <span className={styles.line}><p className={styles.label}>Price/Book</p><p className={styles.number}>{stock.priceToBook}</p></span>
                    <span className={styles.line}><p className={styles.label}>Price/Sales</p><p className={styles.number}>{stock.priceToSalesTrailing12Months}</p></span>
                    <span className={styles.line}><p className={styles.label}>Price/Earnings</p><p className={styles.number}>{stock.trailingPE}</p></span>
                    <span className={styles.line}><p className={styles.label}>Forward Price/Earnings</p><p className={styles.number}>{stock.forwardPE}</p></span>
                    <span className={styles.line}><p className={styles.label}>Price/Free Cash Flow</p><p className={styles.number}>{stock.priceToFreeCashFlow}</p></span>
                </div>
                <div>
                    <p className={styles.group}>Dividends</p>
                    <span className={styles.line}><p className={styles.label}>Dividend Rate</p><p className={styles.number}>${stock.dividendRate}</p></span>
                    <span className={styles.line}><p className={styles.label}>Yield</p><p className={styles.number}>{stock.dividendYield}</p></span>
                    <span className={styles.line}><p className={styles.label}>Payout Ration</p><p className={styles.number}>{stock.payoutRatio}</p></span>
                    <span className={styles.line}><p className={styles.label}>Free Cash Flow</p><p className={styles.number}>${stock.freeCashFlowPerStock}</p></span>
                </div>
                <div>
                    <p className={styles.group}>Balance Sheet</p>
                    <span className={styles.line}><p className={styles.label}>Curent Assets</p><p className={styles.number}>{stock.marketCap}</p></span>
                    <span className={styles.line}><p className={styles.label}>Total Liabilities</p><p className={styles.number}>{stock.enterpriseValue}</p></span>
                    <span className={styles.line}><p className={styles.label}>Total Cash</p><p className={styles.number}>{stock.totalCash}</p></span>
                    <span className={styles.line}><p className={styles.label}>Total Debt</p><p className={styles.number}>{stock.totalDebt}</p></span>
                </div>
                <div>
                    <p className={styles.group}>Company Profile</p>
                    <span className={styles.about}><p className={styles.label}>Contry</p><p className={styles.number}>{stock.contry}</p></span>
                    <span className={styles.about}><p className={styles.label}>Sector</p><p className={styles.number}>{stock.sector}</p></span>
                    <p className={styles.description}>{stock.longBusinessSummery}</p>
                </div>
            </div>
            <SalesChart stock={stock}/>
        </div>
    );
}

StockInfo.propTypes = {
    onDeleteStock: PropTypes.func,
    deleteStock: PropTypes.func,
    stock: PropTypes.object
}


