import React from 'react';

const {
    Provider: StockServiceProvider,
    Consumer: StockServiceConsumer
} = React.createContext();

export {
    StockServiceConsumer,
    StockServiceProvider
}