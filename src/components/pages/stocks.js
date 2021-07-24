// import React from 'react';
// import { MiniaturesGains } from '../miniatures';
// import Table from '../../ui/table';
// import './pages.css';
// import StockInfo from '../stock-info';

// const Stocks = () => {

//     const onClick = () => {
//         return () => this.window.show()
//     }

//     return (
//         <div>
//             <MiniaturesGains />
//             <div>
//                 <h2>stocklist</h2>
//                 <div className='stock-list'>
//                     <Table onClick={onClick}/>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Stocks;

import React, { Component, Fragment } from 'react';
import { Window as WindowDHX } from "dhx-suite";
import { MiniaturesGains } from '../miniatures';
import Table from '../../ui/table';
import StockInfo from '../stock-info';
import './pages.css';

export default class Stocks extends Component {
    componentDidMount() {
        this.window = new WindowDHX({
            title: 'Apple Inc',
            html: <StockInfo />,
            closable: true,
            modal: true,
        });
    }
    componentWillUnmount() {
        this.window && this.window.destructor();
    }

    render() {
        return (
            <Fragment>
                <MiniaturesGains />
                <div>
                    <h2>stocklist</h2>
                    <div className='stock-list'>
                        <div ref={el => (this.el = el)}></div>
                        <Table onClick={() => this.window.show()} />
                    </div>
                </div>
            </Fragment>
        )
    }
}