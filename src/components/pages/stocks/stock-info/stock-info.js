import React from 'react';
import PropTypes from 'prop-types';
import { Holdings } from './holdings';
import styles from './stock-info.module.css';
import { SalesChart } from './sales-chart/sales-chart';
import { LineChart } from '../../../../ui';

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
            <LineChart 
                data={getData(stock.chartData)}
                canvasHeight={140}
                canvasWidth={502} />
            <div className={styles.valuation}>
                <div>
                    <p className={styles.group}>Valutaion</p>
                    <span className={styles.line}><p className={styles.label}>Market Cap</p><p className={styles.number}>{stock.marketCap || 'N/A'}</p></span>
                    <span className={styles.line}><p className={styles.label}>Enterprise Value</p><p className={styles.number}>{stock.enterpriseValue || 'N/A'}</p></span>
                    <span className={styles.line}><p className={styles.label}>Price/Book</p><p className={styles.number}>{stock.priceToBook || 'N/A'}</p></span>
                    <span className={styles.line}><p className={styles.label}>Price/Sales</p><p className={styles.number}>{stock.priceToSalesTrailing12Months || 'N/A'}</p></span>
                    <span className={styles.line}><p className={styles.label}>Price/Earnings</p><p className={styles.number}>{stock.trailingPE || 'N/A'}</p></span>
                    <span className={styles.line}><p className={styles.label}>Forward Price/Earnings</p><p className={styles.number}>{stock.forwardPE || 'N/A'}</p></span>
                    <span className={styles.line}><p className={styles.label}>Price/Free Cash Flow</p><p className={styles.number}>{stock.priceToFreeCashFlow || 'N/A'}</p></span>
                </div>
                <div>
                    <p className={styles.group}>Dividends</p>
                    <span className={styles.line}><p className={styles.label}>Dividend Rate</p><p className={styles.number}>{(stock.dividendRate ? ('$' + stock.dividendRate) : null) || 'N/A'}</p></span>
                    <span className={styles.line}><p className={styles.label}>Yield</p><p className={styles.number}>{stock.dividendYield || 'N/A'}</p></span>
                    <span className={styles.line}><p className={styles.label}>Payout Ration</p><p className={styles.number}>{stock.payoutRatio || 'N/A'}</p></span>
                    <span className={styles.line}><p className={styles.label}>Free Cash Flow</p><p className={styles.number}>{(stock.freeCashFlowPerStock ? ('$' + stock.freeCashFlowPerStock) : null) || 'N/A'}</p></span>
                </div>
                <div>
                    <p className={styles.group}>Balance Sheet</p>
                    <span className={styles.line}><p className={styles.label}>Curent Assets</p><p className={styles.number}>{stock.marketCap || 'N/A'}</p></span>
                    <span className={styles.line}><p className={styles.label}>Total Liabilities</p><p className={styles.number}>{stock.enterpriseValue || 'N/A'}</p></span>
                    <span className={styles.line}><p className={styles.label}>Total Cash</p><p className={styles.number}>{stock.totalCash || 'N/A'}</p></span>
                    <span className={styles.line}><p className={styles.label}>Total Debt</p><p className={styles.number}>{stock.totalDebt}</p></span>
                </div>
                <div>
                    <p className={styles.group}>Company Profile</p>
                    <span className={styles.about}><p className={styles.label}>Country</p><p className={styles.number}>{stock.country || 'N/A'}</p></span>
                    <span className={styles.about}><p className={styles.label}>Sector</p><p className={styles.number}>{stock.sector || 'N/A'}</p></span>
                    <p className={styles.description}>{stock.longBusinessSummery}</p>
                </div>
            </div>
            <SalesChart stock={stock} />
        </div>
    );
}

const getData = (data) => {
    let dataArr = [];
    for (let key in data) {
        dataArr.unshift(data[key].close);
    }
    return dataArr;
}

StockInfo.propTypes = {
    onDeleteStock: PropTypes.func,
    deleteStock: PropTypes.func,
    stock: PropTypes.object
}


