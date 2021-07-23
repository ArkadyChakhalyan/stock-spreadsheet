import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Button from '../../ui/button/';
import Input from '../../ui/input';
import Tab from '../../ui/tab';
import Header from '../header/'
import { Stocks, Dividends, Allocation } from '../pages';

import './app.css';

const App = () => {

  return (
    <Router>
      <div className='app'>

        <Header />
        <div className='body'>
          <Route path='/stocks/' component={Stocks} />
          <Route path='/dividends/' component={Dividends} />
          <Route path='/allocation/' component={Allocation} />
        </div>




        <br /><br /><br /><br /><br /><br />
        <Tab options={['monthly', 'yearly']} type={'small'} />
        <br /><br />
        <Button icon={'fas fa-plus fa-sm'} width={250} color={'#007000'}>
          new buy
        </Button>
        <br /><br />
        <Button icon={'fas fa-pen fa-sm'}>
          edit
        </Button>
        <br /><br />
        <Button icon={'fas fa-trash'} color={'#D2222D'}>
          delete
        </Button>
        <br /><br />
        <Button type={'round'} icon={'fas fa-times'} color={'#D2222D'} />
        <br /><br />
        <Button type={'round'} icon={'fas fa-chevron-left'} />
        <Button type={'round'} icon={'fas fa-chevron-right'} />
        <br /><br />
        <Input label={'ticker'} />
        <br />
        <Input label={'price'} />

      </div>
    </Router>
  )
}

export default App;
