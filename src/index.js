import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app/';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { StockServiceProvider } from './stock-service-context/stock-service-context';
import { Provider } from 'react-redux';
import { store } from './store';
import { StockService } from './service/stock-service';

// fetch('/api/test')
// .then((response) => response.json())
// .then((data) => console.log('data', data))

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
