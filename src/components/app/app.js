import React from 'react';
import Button from '../../ui/button/';
import Input from '../../ui/input';
import StockMiniature from '../../ui/stock-miniature';
import Tab from '../../ui/tab';
import './app.css';

const App = () => {

  return (
    <div className='app'>
      <div className='header'>
        <div className='container'>
          <h1>stock spreadsheet</h1>
          <h2>track your cashflow</h2>
          <div className='holdings info'>
            <div className='holdings container left'>
              <span className='holdings'><p>Holdings</p>
              <p className='holdings total'>$13213.28</p></span>
            </div>
            <div className='holdings container right'>
              <span className='holdings gains'><p>Month's Gain</p><p className='holdings gain'>$240.24 (+5.23%)</p></span>
              <span className='holdings gains'><p>Total Gain</p><p className='holdings gain'>$1103.94 (+20.83%)</p></span>
            </div>
          </div>
          <div className='main-menu'>
            <Tab options={['stocks', 'dividends', 'sectors']} />
          </div>
        </div>
      </div>
      <br /><br />
      <div className='body'>
        <div>
          <h2>month's top movers</h2>
          <div className='miniatures'>
            <StockMiniature gain={10} />
            <StockMiniature gain={10} />
            <StockMiniature gain={10} />
            <StockMiniature gain={-5} />
            <StockMiniature gain={-5} />
            <StockMiniature />
          </div>
        </div>
        <div>
          <h2>stock list</h2>
        </div>
        <br /><br />
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
    </div>
  )
}

export default App;
