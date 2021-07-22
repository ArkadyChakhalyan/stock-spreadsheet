import React from 'react';
import Button from '../../ui/button/';
import Input from '../../ui/input';
import StockMiniature from '../../ui/stock-miniature';
import Tab from '../../ui/tab';
import './app.css';

const App = () => {

  return (
    <div className='App'>
      <div className='container'>
      <h1>Heading</h1>
      <h2>Subtitle</h2>
      <p>Text example Text example Text example Text example</p>
      <div className='main-menu'>
      <Tab options={['stocks', 'dividends', 'sectors']}/>
      </div>
      <br /><br />
      </div>
      
      <Tab options={['monthly', 'yearly']} type={'small'} />
      <br /><br />
      <Button icon = {'fas fa-plus fa-sm'} width={250} color={'#007000'}>
        new buy
      </Button>
      <br /><br />
      <Button icon = {'fas fa-pen fa-sm'}>
        edit
      </Button>
      <br /><br />
      <Button icon = {'fas fa-trash'} color={'#D2222D'}>
        delete
      </Button>
      <br /><br />
      <Button type={'round'} icon = {'fas fa-times'} color={'#D2222D'}/>
      <br /><br />
      <Button type={'round'} icon = {'fas fa-chevron-left'}/>
      <Button type={'round'} icon = {'fas fa-chevron-right'}/>
      <br /><br />
      <Input label={'ticker'} />
      <br />
      <Input label={'price'} />
      <StockMiniature gain={10}/>
      <StockMiniature gain={-5}/>
      <StockMiniature />
    </div>
  )
}

export default App;
