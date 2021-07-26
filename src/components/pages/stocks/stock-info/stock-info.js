import Input from '../../../../ui/input';
import React, { useState } from 'react';
import Button from '../../../../ui/button';
import Popup from '../../../../ui/popup';
import './stock-info.css';

const StockInfo = ({ onDeleteStock }) => {

    const onClose = () => {
        setPopupOn(false);
    }

    const onSubmit = () => {
        document.body.style.overflow = 'overlay';
        onClose();
    }

    const onDelete = () => {
        document.body.style.overflow = 'overlay';
        onDeleteStock();
    }

    const head = (
        <div className='edit stock head'>
            <p className='edit stock company'>Apple Inc</p>
            <br />
            <p className='edit stock ticker'>APPL</p>
            <div className='edit stock bar'></div>
        </div>
    );

    const inside = (
        <div>
            <div className='edit stock info'>
                <Input label={'Price'} value={'110.54'} width={'250'} />
                <Input label={'Shares'} value={'15'} width={'250'} />
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
                    <span className='data'><p className='text'>Market Value</p><p className='number'>$1235.56</p></span>
                    <span className='data'><p className='text'>Shares</p><p className='number'>5</p></span>
                    <span className='data'><p className='text'>Avarage Cost</p><p className='number'>$110.54</p></span>
                </div>
                <div className='buttons'>
                    <Button width={'92'} icon={'fas fa-pen fa-sm'} onClick={onClick}>Edit</Button>
                    <Button icon={'fas fa-trash'} color={'#D2222D'} onClick={onDelete}>delete</Button>
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
                            <td className='data'>2.476T</td>
                            <td>Enterprise Value</td>
                            <td className='data'>2.476T</td>
                        </tr>
                        <tr>
                            <td>P/B</td>
                            <td className='data'>35.86</td>
                            <td>P/S</td>
                            <td className='data'>6.86</td>
                        </tr>
                        <tr>
                            <td>P/E</td>
                            <td className='data'>33.29</td>
                            <td>Forward P/E</td>
                            <td className='data'>26.54</td>
                        </tr>
                        <tr>
                            <th colSpan="4">Dividend</th>
                        </tr>
                        <tr>
                            <td>Dividend</td>
                            <td className='data'>0.88 (0.59%)</td>
                            <td>Payout Ratio</td>
                            <td className='data'>18.34%</td>
                        </tr>
                        <tr>
                            <th colSpan="4">Balance Sheet</th>
                        </tr>
                        <tr>
                            <td>Total Cash</td>
                            <td className='data'>69.34B</td>
                            <td>Total Debt</td>
                            <td className='data'>134.74</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='sales profits'>Sales and profits charts</div>
        </div>
    );
}

export default StockInfo