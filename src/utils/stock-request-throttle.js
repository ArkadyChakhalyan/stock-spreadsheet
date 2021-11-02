export const stockRequestThrottle = (func, ms) => {
    let stockRequested = false,
        requestFunction,
        stockInfo;

    function stockRequestWrapper() {

        if (stockRequested) {
            requestFunction = arguments;
            stockInfo = this;
            return;
        }

        func.apply(this, arguments);
        
        stockRequested = true;

        setTimeout(function () {
            stockRequested = false;
            if (requestFunction) {
                stockRequestWrapper.apply(stockInfo, requestFunction);
                requestFunction = stockInfo = null;
            }
        }, ms);
    }

    return stockRequestWrapper;
}