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
        setErrorPrice(false);
        setErrorShares(false);
        setPriceInputValue(stock.avarageCost);
        setSharesInputValue(stock.shares);
        setPopupOn(false);
    }

    const [priceValue, setPriceValue] = useState(stock.avarageCost);
    const [sharesValue, setSharesValue] = useState(stock.shares);

    const onSubmit = () => {
        
        if (priceValue === '' || sharesValue === '' || errorShares || errorPrice) {
            alert('We need you to fill up all the fields correctly!');
            return;
        }
        stock.avarageCost = Math.round(priceValue * 100) / 100;
        stock.shares = Math.round(sharesValue * 100) / 100;

        editStock(stock)

        document.body.style.overflow = 'overlay';
        onClose();
    }

    const onDelete = () => {
        deleteStock(stock.symbol)
        document.body.style.overflow = 'overlay';
        onDeleteStock();
    }

    const onKeyPress = (e) => {
        if (e.code === 'Enter') onSubmit();
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
    const [inputPriceValue, setInputPriceValue] = useState('');
    const [inputSharesValue, setInputSharesValue] = useState('');
    const [errorPrice, setErrorPrice] = useState(false);
    const [errorShares, setErrorShares] = useState(false);

    const onBlurPrice = () => {
        let rgx = /^[0-9]*\.?[0-9]*$/;
        if (!inputPriceValue.match(rgx)) setErrorPrice(true)
    }

    const onFocusPrice = () => {
        if (errorPrice) setErrorPrice(false)
    }

    const onBlurShares = () => {
        let rgx = /^[0-9]*\.?[0-9]*$/;
        if (!inputSharesValue.match(rgx) || '') setErrorShares(true)
    }

    const onFocusShares = () => {
        if (errorShares) setErrorShares(false)
    }

    const inside = (
        <div>
            <div className='edit stock info'>
                <Input
                    label={'Price'}
                    value={priceInputValue}
                    width={'250'}
                    onChange={e => {     
                        setPriceInputValue(e.target.value)               
                        setInputPriceValue(e.target.value)
                        setPriceValue(e.target.value);
                    }}
                    onBlur={onBlurPrice}
                    onFocus={onFocusPrice}
                    error={errorPrice}
                    errorMessage={'Something went wrong'} />
                <Input
                    label={'Shares'}
                    value={sharesInputValue}
                    width={'250'}
                    onChange={e => {
                        setSharesInputValue(e.target.value) 
                        setInputSharesValue(e.target.value)
                        setSharesValue(e.target.value);
                    }}
                    onBlur={onBlurShares}
                    onFocus={onFocusShares}
                    error={errorShares}
                    errorMessage={'Something went wrong'} />
            </div>
            <div className='edit stock submit'>
                <Button onClick={onSubmit} width={'262'}>submit</Button>
            </div>
        </div>
    );

    const [popupOn, setPopupOn] = useState(false);
    const popup = popupOn ? <Popup onClose={onClose} inside={inside} head={head} onKeyPress={onKeyPress} /> : null;

    const onClick = () => {
        setPopupOn(true);
    }

    return (
        <div className='stock info'>
            <div className='your-holdings'>
                <div className='inside'>
                    {popup}
                    <h2>Your<br />Holdings</h2>
                    <span className='data'><p className='text'>Market Value</p><p className='number'>${Math.round((stock.avarageCost * stock.shares) * 100) / 100}</p></span>
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
