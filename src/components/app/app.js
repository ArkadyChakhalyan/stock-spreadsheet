import { Route } from 'react-router-dom';
import React from 'react';
import { Header } from '../header/'
import { Stocks, Dividends, Allocation } from '../pages';
import './app.css';

export const App = () => {

  return (
    <div className='app'>
      <Header />
      <div className='body'>
        <Route path='/stocks/' component={Stocks} />
        <Route path='/dividends/' component={Dividends} />
        <Route path='/allocation/' component={Allocation} />
      </div>
    </div>
  )
}
