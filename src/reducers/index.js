const initialState = {
    totalValue: 0,
    stocks: [],
    tableData: [],
    dividends: []
};

const reducer = (state = initialState, action) => {

    let { stocks } = state;

    let newTotalValue;
    let newTableData;


    switch (action.type) {
        case 'ADD_STOCK':

            let newStocks = [
                ...stocks,
                action.stock
            ];

            newTotalValue = 0;
            newStocks.map((item) => newTotalValue += item.currentPrice * item.shares);

            newTableData = newStocks.map((item) => {
                return [
                    item.longName,
                    item.symbol,
                    item.shares,
                    `$${Math.round((item.avarageCost) * 100) / 100}`,
                    `$${Math.round((item.avarageCost * item.shares) * 100) / 100}`,
                    `$${Math.round((item.currentPrice) * 100) / 100}`,
                    `$${Math.round((item.currentPrice * item.shares) * 100) / 100}`,
                    `$${Math.round(((item.currentPrice - item.avarageCost) * item.shares) * 100) / 100} (${Math.round(((((item.currentPrice - item.avarageCost) * item.shares) / (item.currentPrice * item.shares)) * 100) * 100) / 100}%)`,
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
            }

        case 'EDIT_STOCK':

            let editedStockIdx = stocks.findIndex((item) => item.symbol === action.stock.symbol)

            let editedStocks = [
                ...stocks.splice(0, editedStockIdx),
                action.stock,
                ...stocks.splice(editedStockIdx + 1),
            ];

            newTotalValue = 0;
            editedStocks.map((item) => newTotalValue += item.currentPrice * item.shares);

            newTableData = editedStocks.map((item) => {
                return [
                    item.longName,
                    item.symbol,
                    item.shares,
                    `$${Math.round((item.avarageCost) * 100) / 100}`,
                    `$${Math.round((item.avarageCost * item.shares) * 100) / 100}`,
                    `$${Math.round((item.currentPrice) * 100) / 100}`,
                    `$${Math.round((item.currentPrice * item.shares) * 100) / 100}`,
                    `$${Math.round(((item.currentPrice - item.avarageCost) * item.shares) * 100) / 100} (${Math.round(((((item.currentPrice - item.avarageCost) * item.shares) / (item.currentPrice * item.shares)) * 100) * 100) / 100}%)`,
                    `${Math.round((((item.currentPrice * item.shares) / newTotalValue) * 100) * 100) / 100}%`,
                    `${Math.round(((item.dividendRate / item.avarageCost) * 100) * 100) / 100}%`,
                    `$${Math.round((item.dividendRate) * 100) / 100}`,
                    `$${Math.round((item.dividendRate * item.shares) * 100) / 100}`
                ]
            })

            return {
                ...state,
                stocks: editedStocks,
                tableData: newTableData,
                totalValue: newTotalValue,
            }

        case 'DELETE_STOCK':
            
            let deletedIdx = stocks.findIndex((item) => item.symbol === action.ticker)

            let updatedStocks = [
                ...stocks.splice(0, deletedIdx),
                ...stocks.splice(deletedIdx + 1),
            ];

            newTotalValue = 0;
            updatedStocks.map((item) => newTotalValue += item.currentPrice * item.shares);

            newTableData = updatedStocks.map((item) => {
                return [
                    item.longName,
                    item.symbol,
                    item.shares,
                    `$${Math.round((item.avarageCost) * 100) / 100}`,
                    `$${Math.round((item.avarageCost * item.shares) * 100) / 100}`,
                    `$${Math.round((item.currentPrice) * 100) / 100}`,
                    `$${Math.round((item.currentPrice * item.shares) * 100) / 100}`,
                    `$${Math.round(((item.currentPrice - item.avarageCost) * item.shares) * 100) / 100} (${Math.round(((((item.currentPrice - item.avarageCost) * item.shares) / (item.currentPrice * item.shares)) * 100) * 100) / 100}%)`,
                    `${Math.round((((item.currentPrice * item.shares) / newTotalValue) * 100) * 100) / 100}%`,
                    `${Math.round(((item.dividendRate / item.avarageCost) * 100) * 100) / 100}%`,
                    `$${Math.round((item.dividendRate) * 100) / 100}`,
                    `$${Math.round((item.dividendRate * item.shares) * 100) / 100}`
                ]
            })

            return {
                ...state,
                stocks: updatedStocks,
                tableData: newTableData,
                totalValue: newTotalValue,
            }

        default:
            return state;
    }
};

export default reducer;