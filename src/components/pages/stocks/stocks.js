import React, { useState } from 'react';
import Button from '../../../ui/button';
import Popup from '../../../ui/popup';
import Table from '../../../ui/table';
import { MiniaturesGains } from '../../miniatures';
import Input from '../../../ui/input';
import StockPopup from './stock-popup';
import compose from '../../../utils';
import { withStockService } from '../../hoc';
import { addStock } from '../../../actions';
import { connect } from 'react-redux';

const Stocks = ({ stockService, tableData, addStock }) => {

    const onClose = () => {
        setPopupOn(false);
    }

    const [ticker, setTicker] = useState('');

    const [popupOn, setPopupOn] = useState(false);
    const popup = popupOn ? <StockPopup onClose={onClose} ticker={ticker}/> : null;

    const onClick = (e) => {
        //записать тикер без обращения к дому??
        setTicker(e.target.closest('tr').firstChild.nextSibling.innerHTML);
        setPopupOn(true);
    }

    const onCloseNew = () => {
        setPopupNewOn(false);
    }

    const [tickerValue, setTickerValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [sharesValue, setSharesValue] = useState('');

    const onSubmitNew = () => {

        if (tickerValue === '' || priceValue === '' || sharesValue === '') {
            alert('We need you to fill up all the fields before adding new holding to your list!');
            return;
        }

        const newStock = stockService.getStock(tickerValue.toUpperCase())

        if (newStock) {
            newStock.avarageCost = priceValue;
            newStock.shares = sharesValue;
            addStock(newStock);
        } 

            document.body.style.overflow = 'overlay';
            onCloseNew();
        }

        const head = (
            <div className='edit stock head'>
                <p className='edit stock company'>New Holding</p>
                <br />
                <p className='edit stock ticker'>Type ticker, avarage price and shares bought</p>
                <div className='edit stock bar'></div>
            </div>
        );

        const inside = (
            <div>
                <form className='edit stock info' style={{ marginTop: '70px' }}>
                    <Input
                        label={'Ticker'}
                        width={'250'}
                        onChange={e => setTickerValue(e.target.value)} />
                    <Input
                        label={'Price'}
                        width={'250'}
                        onChange={e => {
                            let rgx = /^[0-9]*\.?[0-9]*$/;
                            if (!e.target.value.match(rgx)) e.target.value = '';
                            setPriceValue(e.target.value)
                        }} />
                    <Input
                        label={'Shares'}
                        width={'250'}
                        onChange={e => {
                            let rgx = /^[0-9]*\.?[0-9]*$/;
                            if (!e.target.value.match(rgx)) e.target.value = '';
                            setSharesValue(e.target.value)
                        }} />
                </form>
                <div className='edit stock submit'>
                    <Button onClick={onSubmitNew} width={'262'}>add</Button>
                </div>
            </div>
        );

        const [popupNewOn, setPopupNewOn] = useState(false);
        const popupNew = popupNewOn ? <Popup onClose={onCloseNew} head={head} inside={inside} /> : null;

        const onClickNew = () => {
            setPopupNewOn(true);
        }

        const table = (tableData.length > 0) ? <Table
            onClick={onClick}
            sort
            width={'1180'}
            collumns={['Name', 'Ticker', 'Position', 'Avarage Price', 'Cost', 'Price', 'Market Value', 'Gains/Loses', 'Portfolio Allocation', 'Yield', 'Dividend', 'Dividend Income']}
            data={tableData} /> : null;

        return (
            <div>
                <MiniaturesGains />
                <div className='stock-list'>
                    {popup}
                    {table}
                </div>
                <br />
                {popupNew}
                <Button icon={'fas fa-plus fa-sm'} width={'1182'} color={'#007000'} onClick={onClickNew} >
                    add new holding
                </Button>
            </div>
        );
    };

    const mapStateToProps = ({ stocks, tableData }) => {
        return {
            stocks,
            tableData
        };
    }

    const mapDispatchToProps = { addStock }

    export default compose(
        withStockService(),
        connect(mapStateToProps, mapDispatchToProps)
    )(Stocks);


