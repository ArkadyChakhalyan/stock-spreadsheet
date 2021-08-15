export const portfolio = (state, action) => {

    if (state === undefined) {
        return {
            totalValue: 0,
            totalGains: 0,
            totalDividends: 0,
            stocks: [],
            tableData: [],
            allocationSector: [],
            allocationContry: [],
        }
    }

    switch (action.type) {
        case 'ADD_STOCK':
            return add(state.portfolio, action);
        case 'EDIT_STOCK':
            return edit(state.portfolio, action);
        case 'DELETE_STOCK':
            return deleted(state.portfolio, action);
        default:
            return state.portfolio;
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

    let newAllocationSector = [];
    let allocationSector = {};
    stockList.map((item) => {
        if (allocationSector[item.sector]) allocationSector[item.sector] += item.currentPrice * item.shares;
        else allocationSector[item.sector] = item.currentPrice * item.shares;
    });
    for (let key in allocationSector) {
        let percent = Math.round((allocationSector[key] / newTotalValue) * 10000) / 100;
        percent += '%';
        newAllocationSector.push([key, percent]);
    }

    let newAllocationContry = [];
    let allocationContry = {};
    stockList.map((item) => {
        if (allocationContry[item.contry]) allocationContry[item.contry] += item.currentPrice * item.shares;
        else allocationContry[item.contry] = item.currentPrice * item.shares;
    });
    for (let key in allocationContry) {
        let percent = Math.round((allocationContry[key] / newTotalValue) * 10000) / 100;
        percent += '%';
        newAllocationContry.push([key, percent]);
    }

    return {
        ...state,
        stocks: stockList,
        tableData: newTableData,
        totalValue: newTotalValue,
        totalGains: newTotalGains,
        totalDividends: newTotalDividends,
        allocationSector: newAllocationSector,
        allocationContry: newAllocationContry
    }
}

/**
 * Function add (when a new stock has been added to a portfolio).
 * @param {object} state - Current state.
 * @param {object} action - Redux action.
 * @returns {object} New state with updated portfilio data.
 */
const add = (state, action) => {

    let { stocks } = state;
    let { stock, ticker, avarageCost, shares } = action;

    let newStocks;

    let idx = stocks.findIndex(({ symbol }) => ticker.toUpperCase() === symbol);

    if (idx > -1) {
        let newShares = stocks[idx].shares + shares;
        let newAvarageCost = (stocks[idx].avarageCost + avarageCost) / 2;

        let editedStock = {
            ...stocks[idx],
            avarageCost: newAvarageCost,
            shares: newShares
        }

        newStocks = [
            ...stocks.slice(0, idx),
            editedStock,
            ...stocks.slice(idx + 1),
        ];
    }
    else {
        stock.avarageCost = avarageCost;
        stock.shares = shares;

        newStocks = [
            ...stocks,
            stock
        ];
    }

    return updatePortfolio(state, newStocks);
}

/**
 * Function edit (when a stock has been edited).
 * @param {object} state - Current state.
 * @param {object} action - Redux action.
 * @returns {object} New state with updated portfilio data.
 */
const edit = (state, action) => {

    let { stocks } = state;

    let idx = stocks.findIndex((item) => item.symbol === action.stock.symbol);

    let editedStocks = [
        ...stocks.slice(0, idx),
        action.stock,
        ...stocks.slice(idx + 1),
    ];

    return updatePortfolio(state, editedStocks);
}

/**
 * Function delete (when a stock has been deleted to a portfolio).
 * @param {object} state - Current state.
 * @param {object} action - Redux action.
 * @returns {object} New state with updated portfilio data.
 */
const deleted = (state, action) => {

    let { stocks } = state;

    let idx = stocks.findIndex((item) => item.symbol === action.ticker)

    let updatedStocks = [
        ...stocks.slice(0, idx),
        ...stocks.slice(idx + 1),
    ];

    return updatePortfolio(state, updatedStocks);
}