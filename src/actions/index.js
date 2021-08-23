/**
 * Function addStock (when a new stock has been added to a portfolio).
 * @param {string} stock - Stock data from API.
 * @param {string} ticker - Added stock's ticker.
 * @param {string} avarageCost - Added stock's avarage cost per share.
 * @param {string} shares - Added stock's shares.
 * @returns {object} Redux action with stock object.
 */
const addStock = (stock, ticker, avarageCost, shares) => {
    return {
        type: 'ADD_STOCK',
        stock: stock,
        ticker: ticker,
        avarageCost: avarageCost,
        shares: shares
    };
};

/**
 * Function editStock (when a stock has been edited).
 * @param {object} editedStock - Edited stock with previous data from API and updated information on amount of shares and cost per share.
 * @returns {object} Redux action with stock object.
 */
const editStock = (editedStock) => {
    return {
        type: 'EDIT_STOCK',
        stock: editedStock
    };
};

/**
 * Function deleteStock (when a stock has been deleted to a portfolio).
 * @param {object} deletedStockTicker - Ticker of a stock that has been deleted.
 * @returns {object} Redux action with stock ticker.
 */
const deleteStock = (deletedStockTicker) => {
    return {
        type: 'DELETE_STOCK',
        ticker: deletedStockTicker
    };
};

/**
 * Function addDividend (when recieved dividend have been added or changed).
 * @param {number} year - Year when dividend has been recieved.
 * @param {string} month - Month when dividend has been recieved.
 * @param {string} paid - Dividends recieved at that period.
 * @returns {object} Redux action with year, month and dividends paid.
 */
const addDividend = (year, month, paid) => {
    return {
        type: 'ADD_DIVIDEND',
        year: year,
        month: month,
        paid: paid
    };
};

/**
 * Function addYear (when new year have been added).
 * @param {object} year - New year of dividends payments.
 * @returns {object} Redux action with year.
 */
const addYear = (year) => {
    return {
        type: 'ADD_YEAR',
        year: year,
    }
}

const stockRequested = () => {
    return {
        type: 'FETCH_STOCK_REQUEST'
    };
};

const stockLoaded = (stock) => {
    return {
        type: 'FETCH_STOCK_SUCCESS',
        stock: stock
    };
};

const stockError = (error) => {
    return {
        type: 'FETCH_STOCK_FAILURE',
        error: error
    };
};

const fetchStock = (stockService) => (ticker) => async (dispatch) => {
        dispatch(stockRequested());
        return await stockService.getStock(ticker).then(
            (stock) => dispatch(stockLoaded(stock)),
            (error) => dispatch(stockError(error)),
        );
};

const clearState = () => {
    return {
        type: 'CLEAR_STATE'
    };
};

const load = () => {
    return {
        type: 'LOADING'
    };
};

const ready = () => (dispatch) => {
    setTimeout(() => dispatch({
        type: 'READY'
    }), 500);
};

export {
    addStock,
    editStock,
    deleteStock,
    addDividend,
    addYear,
    fetchStock,
    load,
    ready,
    clearState
};