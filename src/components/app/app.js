import React from 'react';
import Button from '../../ui/button/';
import Input from '../../ui/input';
import StockMiniature from '../../ui/stock-miniature';
import './app.css';

const App = () => {

  return (
    <div className='App'>
      <Button icon = {'fas fa-plus fa-sm'} width={250} color={'#007000'}>
        NEW BUY
      </Button>
      <br /><br />
      <Button icon = {'fas fa-pen fa-sm'}>
        EDIT
      </Button>
      <br /><br />
      <Button icon = {'fas fa-trash'} color={'#D2222D'}>
        DELETE
      </Button>
      <br /><br />
      <Button type={'round'} icon = {'fas fa-times'} color={'#D2222D'}/>
      <Input label={'ticker'} />
      <Input label={'price'} />
      <StockMiniature gain={10}/>
      <StockMiniature gain={-5}/>
      <StockMiniature />
    </div>
  )
}

export default App;
