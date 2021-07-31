import React from 'react';
import { StockServiceConsumer } from '../stock-service-context/stock-service-context';


const withStockService = () => (Wrapped) => {

    return (props) => {
        
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
};

export default withStockService;