import React from 'react';
import { StockServiceConsumer } from '../../stock-service-context/stock-service-context';


export const withStockService = () => (Wrapped) => {

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