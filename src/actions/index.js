/**
 * Function addStock (when a new stock has been added to a portfolio).
 * @param {object} newStock - New stock with all the data from API, amount of shares and cost per share.
 * @returns {object} Redux action with stock object.
 */
const addStock = (newStock) => {
    return {
        type: 'ADD_STOCK',
        stock: newStock
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

export {
    addStock,
    editStock,
    deleteStock
};