import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import { Header } from '../header/'
import { Stocks, Dividends, Allocation } from '../pages';
import './app.css';

/**
 * Main App page.
 * @returns {Element} App component.
 */
export const App = () => {
  return (
    <div className='app'>
      <Header />
      <div className='body'>
        <Switch>
          <Route path='/stocks/' component={Stocks} />
          <Route path='/dividends/' component={Dividends} />
          <Route path='/allocation/' component={Allocation} />
          <Redirect from="/" to="/stocks" />
        </Switch>
      </div>
    </div>
  )
}
