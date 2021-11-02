import { reducer } from "./reducers";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const  persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : undefined;

export const store = createStore(reducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});



