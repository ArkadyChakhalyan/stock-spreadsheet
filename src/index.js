import ReactDOM from 'react-dom';
import { App } from './components/app/';
import {  HashRouter } from 'react-router-dom';
import './index.css';
import { StockServiceProvider } from './stock-service-context/stock-service-context';
import { Provider } from 'react-redux';
import { store } from './store';
import { StockService } from './service/stock-service';

const stockService = new StockService();

ReactDOM.render(
  <Provider store={store}>
    <StockServiceProvider value={stockService}>
      <HashRouter basename="/stock-spreadsheet">
        <App />
      </HashRouter>
    </StockServiceProvider>
  </Provider>,
  document.getElementById('root')
);
