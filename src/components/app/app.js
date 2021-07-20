import React from 'react';
import {
  ButtonAdd,
  ButtonEdit,
  ButtonClose,
  ButtonDelete,
  ButtonLeft,
  ButtonRight,
  ButtonMenu,
  ButtonSwitch
} from '../../ui/buttons/';
import Input from '../../ui/inputs';
import { 
  StockGain,
  StockDividend,
} from '../../ui/stock-miniature';
import './app.css';

const App = () => {

  return (
    <div className='App'>
      <ButtonAdd />
      <ButtonEdit />
      <ButtonDelete />
      <ButtonClose />
      <br></br>
      <ButtonLeft />
      <ButtonRight />
      <ButtonSwitch opt1={'Month'} opt2={'Year'} />
      <ButtonMenu menu1={'Stocks'} menu2={'Dividends'} menu3={'Sectors'} />
      <Input label={'Stock'} placeholder={'Ticker'}/>
      <StockGain />
      <StockDividend />
    </div>
  )
}

export default App;
