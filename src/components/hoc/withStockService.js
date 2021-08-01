import React from 'react';
import { StockServiceConsumer } from '../stock-service-context/stock-service-context';


const withStockService = () => (Wrapped) => {

    const Service = (props) => {  
        return (
            <StockServiceConsumer>
                {
                    (stockService) => {
                        return <Wrapped {...props} stockService={stockService} />
                    }
                }
            </StockServiceConsumer>
        );
    }

    return Service;
};

export default withStockService;