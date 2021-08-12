const initialState = {
    totalValue: 0,
    totalGains: 0,
    totalDividends: 0,
    stocks: [],
    tableData: [],
    dividends: [],
    allocation: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_STOCK':
            return add(state, action);
        case 'EDIT_STOCK':
            return edit(state, action);
        case 'DELETE_STOCK':
            return deleted(state, action);
        default:
            return state;
    }
};

const updatePortfolio = (state, stockList) => {

    let newTotalValue = 0;
    stockList.map((item) => newTotalValue += item.currentPrice * item.shares);
    newTotalValue = Math.round(newTotalValue * 100) / 100

    let totalCost = 0
    stockList.map((item) => totalCost += item.avarageCost * item.shares);
    let newTotalGains = Math.round((newTotalValue - totalCost) * 100) / 100;

    let newTableData = stockList.map((item) => {
        return [
            item.longName,
            item.symbol,
            item.shares,
            `$${Math.round((item.avarageCost) * 100) / 100}`,
            `$${Math.round((item.avarageCost * item.shares) * 100) / 100}`,
            `$${Math.round((item.currentPrice) * 100) / 100}`,
            `$${Math.round((item.currentPrice * item.shares) * 100) / 100}`,
            `${((Math.round(((item.currentPrice - item.avarageCost) * item.shares) * 100) / 100) > 0 ? '+' : '') + Math.round(((item.currentPrice - item.avarageCost) * item.shares) * 100) / 100}\n(${((Math.round((((item.currentPrice - item.avarageCost) / item.avarageCost) * 100) * 100) / 100) > 0 ? '+' : '') + Math.round((((item.currentPrice - item.avarageCost) / item.avarageCost) * 100) * 100) / 100}%)`,
            `${Math.round((((item.currentPrice * item.shares) / newTotalValue) * 100) * 100) / 100}%`,
            `${Math.round(((item.dividendRate / item.avarageCost) * 100) * 100) / 100}%`,
            `$${Math.round((item.dividendRate) * 100) / 100}`,
            `$${Math.round((item.dividendRate * item.shares) * 100) / 100}`
        ]
    });

    let newTotalDividends = 0;
    stockList.map((item) => newTotalDividends += item.dividendRate * item.shares);
    newTotalDividends = Math.round(newTotalDividends * 100) / 100;

    let newAllocation = [];
    let allocation = {};
    stockList.map((item) => {
        if (allocation[item.sector]) allocation[item.sector] += item.currentPrice * item.shares;
        else allocation[item.sector] = item.currentPrice * item.shares;
    });
    for (let key in allocation) {
        let percent = Math.round((allocation[key] / newTotalValue) * 10000) / 100;
        percent += '%';
        newAllocation.push([key, percent]);
    }

    return {
        ...state,
        stocks: stockList,
        tableData: newTableData,
        totalValue: newTotalValue,
        totalGains: newTotalGains,
        totalDividends: newTotalDividends,
        allocation: newAllocation
    }
}

/**
 * Function add (when a new stock has been added to a portfolio).
 * @param {object} state - Current state.
 * @param {object} action - Redux action.
 * @returns {object} New state with updated stocks, tableData, totalValue, totalGains.
 */
const add = (state, action) => {

    let { stocks } = state;

    let newStocks = [
        ...stocks,
        action.stock
    ];

    return updatePortfolio(state, newStocks);
}

/**
 * Function edit (when a stock has been edited).
 * @param {object} state - Current state.
 * @param {object} action - Redux action.
 * @returns {object} New state with updated stocks, tableData, totalValue, totalGains.
 */
const edit = (state, action) => {

    let { stocks } = state;

    let editedStockIdx = stocks.findIndex((item) => item.symbol === action.stock.symbol);

    let editedStocks = [
        ...stocks.slice(0, editedStockIdx),
        action.stock,
        ...stocks.slice(editedStockIdx + 1),
    ];

    return updatePortfolio(state, editedStocks);
}

/**
 * Function delete (when a stock has been deleted to a portfolio).
 * @param {object} state - Current state.
 * @param {object} action - Redux action.
 * @returns {object} New state with updated stocks, tableData, totalValue, totalGains.
 */
const deleted = (state, action) => {

    let { stocks } = state;

    let deletedIdx = stocks.findIndex((item) => item.symbol === action.ticker)

    let updatedStocks = [
        ...stocks.slice(0, deletedIdx),
        ...stocks.slice(deletedIdx + 1),
    ];

    return updatePortfolio(state, updatedStocks);
}
