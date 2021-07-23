import React from 'react';
import Button from '../../ui/button/';
import Input from '../../ui/input';
import StockMiniature from '../../ui/stock-miniature';
import Tab from '../../ui/tab';
import Table from '../../ui/table';
import Header from '../header/'
import './app.css';

const App = () => {

  return (
    <div className='app'>
      <Header />
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
          <h2>stock list</h2>
        <div className='stock-list'> 
          <Table />
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
    </div>
  )
}

export default App;
