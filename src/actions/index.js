/**
 * function addStock (when a new stock has been added to a portfolio)
 * @param {object} newStock - new stock with all the data from API, amount of shares and cost per share
 * @returns {object} redux action with stock object
 */

const addStock = (newStock) => {
    return {
        type: 'ADD_STOCK',
        stock: newStock
    };
};

/**
 * function editStock (when a stock has been edited)
 * @param {object} editedStock - edited stock with previous data from API and updated information on amount of shares and cost per share
 * @returns {object} redux action with stock object
 */

const editStock = (editedStock) => {
    return {
        type: 'EDIT_STOCK',
        stock: editedStock
    };
};

/**
 * function deleteStock (when a stock has been deleted to a portfolio)
 * @param {object} deletedStockTicker - ticker of a stock that has been deleted
 * @returns {object} redux action with stock ticker
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