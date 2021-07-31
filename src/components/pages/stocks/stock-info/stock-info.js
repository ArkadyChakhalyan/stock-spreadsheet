import Input from '../../../../ui/input';
import React, { useState } from 'react';
import Button from '../../../../ui/button';
import Popup from '../../../../ui/popup';
import { connect } from 'react-redux';
import compose from '../../../../utils';
import { deleteStock, editStock } from '../../../../actions';
import './stock-info.css';

const StockInfo = ({ onDeleteStock, stock, deleteStock, editStock }) => {

    const onClose = () => {
        setPopupOn(false);
    }

    const [priceValue, setPriceValue] = useState('');
    const [sharesValue, setSharesValue] = useState('');

    const onSubmit = () => {

        if (priceValue === '' || sharesValue === '') {
            alert('We need you to fill up all the fields before adding new holding to your list!');
            return;
        }
        stock.avarageCost = priceValue
        stock.shares = sharesValue;

        editStock(stock)

        document.body.style.overflow = 'overlay';
        onClose();
    }

    const onDelete = () => {
        deleteStock(stock.symbol)
        document.body.style.overflow = 'overlay';
        onDeleteStock();
    }

    const head = (
        <div className='edit stock head'>
            <p className='edit stock company'>{stock.longName}</p>
            <br />
            <p className='edit stock ticker'>{stock.symbol}</p>
            <div className='edit stock bar'></div>
        </div>
    );

    const [priceInputValue, setPriceInputValue] = useState(stock.avarageCost);
    const [sharesInputValue, setSharesInputValue] = useState(stock.shares);

    const inside = (
        <div>
            <div className='edit stock info'>
                <Input
                    label={'Price'}
                    value={priceInputValue}
                    width={'250'}
                    onChange={e => {
                        let rgx = /^[0-9]*\.?[0-9]*$/;
                        if (!e.target.value.match(rgx)) e.target.value = '';
                        setPriceInputValue(e.target.value)
                        setPriceValue(e.target.value)
                    }} />
                <Input
                    label={'Shares'}
                    value={sharesInputValue}
                    width={'250'}
                    onChange={e => {
                        let rgx = /^[0-9]*\.?[0-9]*$/;
                        if (!e.target.value.match(rgx)) e.target.value = '';
                        setSharesInputValue(e.target.value)
                        setSharesValue(e.target.value)
                    }} />
            </div>
            <div className='edit stock submit'>
                <Button onClick={onSubmit} width={'262'}>submit</Button>
            </div>
        </div>
    );

    const [popupOn, setPopupOn] = useState(false);
    const popup = popupOn ? <Popup onClose={onClose} inside={inside} head={head} /> : null;

    const onClick = () => {
        setPopupOn(true);
    }

    return (
        <div className='stock info'>
            <div className='your-holdings'>
                <div className='inside'>
                    {popup}
                    <h2>Your<br />Holdings</h2>
                    <span className='data'><p className='text'>Market Value</p><p className='number'>${stock.avarageCost * stock.shares}</p></span>
                    <span className='data'><p className='text'>Shares</p><p className='number'>{stock.shares}</p></span>
                    <span className='data'><p className='text'>Avarage Cost</p><p className='number'>${stock.avarageCost}</p></span>
                </div>
                <div className='buttons'>
                    <Button width={'92'} icon={'fas fa-pen fa-sm'} onClick={onClick}>Edit</Button>
                    <Button icon={'fas fa-trash fa-sm'} color={'#D2222D'} onClick={onDelete}>delete</Button>
                </div>
            </div>
            <div className='chart'>Stock chart</div>
            <div className='valuation'>
                <table>
                    <tbody>
                        <tr>
                            <th colSpan="4">Valuation</th>
                        </tr>
                        <tr>
                            <td>Market Cap</td>
                            <td className='data'>{stock.marketCap}</td>
                            <td>Enterprise Value</td>
                            <td className='data'>{stock.enterpriseValue}</td>
                        </tr>
                        <tr>
                            <td>P/B</td>
                            <td className='data'>{stock.priceToBook}</td>
                            <td>P/S</td>
                            <td className='data'>6.86</td>
                        </tr>
                        <tr>
                            <td>P/E</td>
                            <td className='data'>{stock.trailingPE}</td>
                            <td>Forward P/E</td>
                            <td className='data'>{stock.forwardPE}</td>
                        </tr>
                        <tr>
                            <th colSpan="4">Dividend</th>
                        </tr>
                        <tr>
                            <td>Dividend</td>
                            <td className='data'>${stock.dividendRate} ({stock.dividendYield})</td>
                            <td>Payout Ratio</td>
                            <td className='data'>{stock.payoutRatio}</td>
                        </tr>
                        <tr>
                            <th colSpan="4">Balance Sheet</th>
                        </tr>
                        <tr>
                            <td>Total Cash</td>
                            <td className='data'>{stock.totalCash}</td>
                            <td>Total Debt</td>
                            <td className='data'>{stock.totalDebt}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='sales profits'>Sales and profits charts</div>
        </div>
    );
}

const mapDispatchToProps = { deleteStock, editStock }

export default compose(
    connect(null, mapDispatchToProps)
)(StockInfo);
