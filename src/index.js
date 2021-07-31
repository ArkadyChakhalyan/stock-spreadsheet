import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { StockServiceProvider } from './components/stock-service-context/stock-service-context';
import { Provider } from 'react-redux';
import store from './store';
import StockService from './service/stock-service';

const stockService = new StockService();

ReactDOM.render(
  <Provider store={store}>
    <StockServiceProvider value={stockService}>
      <Router>
        <App />
      </Router>
    </StockServiceProvider>
  </Provider>,
  document.getElementById('root')
);
