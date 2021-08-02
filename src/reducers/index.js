const initialState = {
    totalValue: 0,
    totalGains: 0,
    stocks: [],
    tableData: [],
    dividends: [],
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

/**
 * function add (when a new stock has been added to a portfolio)
 * @param {object} state - current state
 * @param {object} action - redux action
 * @returns {object} new state with updated stocks, tableData, totalValue, totalGains
 */

const add = (state, action) => {

    let { stocks } = state;

    let newStocks = [
        ...stocks,
        action.stock
    ];

    let newTotalValue = 0;
    newStocks.map((item) => newTotalValue += item.currentPrice * item.shares);
    newTotalValue = Math.round(newTotalValue * 100) / 100

    let totalCost = 0;
    newStocks.map((item) => totalCost += item.avarageCost * item.shares);
    let newTotalGains = Math.round((newTotalValue - totalCost) * 100) / 100;

    let newTableData = newStocks.map((item) => {
        return [
            item.longName,
            item.symbol,
            item.shares,
            `$${Math.round((item.avarageCost) * 100) / 100}`,
            `$${Math.round((item.avarageCost * item.shares) * 100) / 100}`,
            `$${Math.round((item.currentPrice) * 100) / 100}`,
            `$${Math.round((item.currentPrice * item.shares) * 100) / 100}`,
            `${((Math.round(((item.currentPrice - item.avarageCost) * item.shares) * 100) / 100) > 0 ? '+' : '') + Math.round(((item.currentPrice - item.avarageCost) * item.shares) * 100) / 100} (${((Math.round((((item.currentPrice - item.avarageCost) / item.avarageCost) * 100) * 100) / 100) > 0 ? '+' : '') + Math.round((((item.currentPrice - item.avarageCost) / item.avarageCost) * 100) * 100) / 100}%)`,
            `${Math.round((((item.currentPrice * item.shares) / newTotalValue) * 100) * 100) / 100}%`,
            `${Math.round(((item.dividendRate / item.avarageCost) * 100) * 100) / 100}%`,
            `$${Math.round((item.dividendRate) * 100) / 100}`,
            `$${Math.round((item.dividendRate * item.shares) * 100) / 100}`
        ]
    })

    return {
        ...state,
        stocks: newStocks,
        tableData: newTableData,
        totalValue: newTotalValue,
        totalGains: newTotalGains
    }
}

/**
 * function edit (when a stock has been edited)
 * @param {object} state - current state
 * @param {object} action - redux action
 * @returns {object} new state with updated stocks, tableData, totalValue, totalGains
 */

const edit = (state, action) => {

    let { stocks } = state;

    let editedStockIdx = stocks.findIndex((item) => item.symbol === action.stock.symbol);

    let editedStocks = [
        ...stocks.slice(0, editedStockIdx),
        action.stock,
        ...stocks.slice(editedStockIdx + 1),
    ];

    let newTotalValue = 0;
    editedStocks.map((item) => newTotalValue += item.currentPrice * item.shares);
    newTotalValue = Math.round(newTotalValue * 100) / 100

    let totalCost = 0
    editedStocks.map((item) => totalCost += item.avarageCost * item.shares);
    let newTotalGains = Math.round((newTotalValue - totalCost) * 100) / 100;

    let newTableData = editedStocks.map((item) => {
        return [
            item.longName,
            item.symbol,
            item.shares,
            `$${Math.round((item.avarageCost) * 100) / 100}`,
            `$${Math.round((item.avarageCost * item.shares) * 100) / 100}`,
            `$${Math.round((item.currentPrice) * 100) / 100}`,
            `$${Math.round((item.currentPrice * item.shares) * 100) / 100}`,
            `${((Math.round(((item.currentPrice - item.avarageCost) * item.shares) * 100) / 100) > 0 ? '+' : '') + Math.round(((item.currentPrice - item.avarageCost) * item.shares) * 100) / 100} (${((Math.round((((item.currentPrice - item.avarageCost) / item.avarageCost) * 100) * 100) / 100) > 0 ? '+' : '') + Math.round((((item.currentPrice - item.avarageCost) / item.avarageCost) * 100) * 100) / 100}%)`,
            `${Math.round((((item.currentPrice * item.shares) / newTotalValue) * 100) * 100) / 100}%`,
            `${Math.round(((item.dividendRate / item.avarageCost) * 100) * 100) / 100}%`,
            `$${Math.round((item.dividendRate) * 100) / 100}`,
            `$${Math.round((item.dividendRate * item.shares) * 100) / 100}`
        ]
    });

    return {
        ...state,
        stocks: editedStocks,
        tableData: newTableData,
        totalValue: newTotalValue,
        totalGains: newTotalGains
    }
}

/**
 * function delete (when a stock has been deleted to a portfolio)
 * @param {object} state - current state
 * @param {object} action - redux action
 * @returns {object} new state with updated stocks, tableData, totalValue, totalGains
 */

const deleted = (state, action) => {
    
    let { stocks } = state;

    let deletedIdx = stocks.findIndex((item) => item.symbol === action.ticker)

    let updatedStocks = [
        ...stocks.slice(0, deletedIdx),
        ...stocks.slice(deletedIdx + 1),
    ];

    let newTotalValue = 0;
    updatedStocks.map((item) => newTotalValue += item.currentPrice * item.shares);
    newTotalValue = Math.round(newTotalValue * 100) / 100;

    let totalCost = 0
    updatedStocks.map((item) => totalCost += item.avarageCost * item.shares);
    let newTotalGains = Math.round((newTotalValue - totalCost) * 100) / 100;

    let newTableData = updatedStocks.map((item) => {
        return [
            item.longName,
            item.symbol,
            item.shares,
            `$${Math.round((item.avarageCost) * 100) / 100}`,
            `$${Math.round((item.avarageCost * item.shares) * 100) / 100}`,
            `$${Math.round((item.currentPrice) * 100) / 100}`,
            `$${Math.round((item.currentPrice * item.shares) * 100) / 100}`,
            `${((Math.round(((item.currentPrice - item.avarageCost) * item.shares) * 100) / 100) > 0 ? '+' : '') + Math.round(((item.currentPrice - item.avarageCost) * item.shares) * 100) / 100} (${((Math.round((((item.currentPrice - item.avarageCost) / item.avarageCost) * 100) * 100) / 100) > 0 ? '+' : '') + Math.round((((item.currentPrice - item.avarageCost) / item.avarageCost) * 100) * 100) / 100}%)`,
            `${Math.round((((item.currentPrice * item.shares) / newTotalValue) * 100) * 100) / 100}%`,
            `${Math.round(((item.dividendRate / item.avarageCost) * 100) * 100) / 100}%`,
            `$${Math.round((item.dividendRate) * 100) / 100}`,
            `$${Math.round((item.dividendRate * item.shares) * 100) / 100}`
        ]
    });

    return {
        ...state,
        stocks: updatedStocks,
        tableData: newTableData,
        totalValue: newTotalValue,
        totalGains: newTotalGains
    }

}
