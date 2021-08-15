import { reducer } from "./reducers";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(reducer, applyMiddleware(thunk));

// export function recieveStockData(ticker) {
//     return function(dispatch) {
//         stockRequested()
//         return stockService.getStock(ticker).then(
//             (stock) => dispatch(stockLoaded(stock)),
//             (error) => dispatch(stockError(error)),
//         );
//     };
// }

// export const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(stockService.getStock)));

// function fetchStock(ticker) {
//     return (dispatch, getState, getStock) => {
//         stockRequested();
//         return getStock(ticker).then(
//             (stock) => dispatch(stockLoaded(stock)),
//             (error) => dispatch(stockError(error)),
//         );
//     }
// }

