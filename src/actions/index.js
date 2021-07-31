const addStock = (newStock) => {
    return {
        type: 'ADD_STOCK',
        stock: newStock
    };
};

const editStock = (editedStock) => {
    return {
        type: 'EDIT_STOCK',
        stock: editedStock
    };
};

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