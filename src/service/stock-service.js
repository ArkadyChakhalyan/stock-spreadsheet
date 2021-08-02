const data = {
    aapl: {
        symbol: 'APPL',
        longName: 'Apple Inc.',
        currentPrice: '210.86',
        dividendRate: '5.6',
        dividendYield: '2.64%',
        payoutRatio: '133.06%',
        marketCap: '5.04B',
        enterpriseValue: '5.12B',
        priceToBook: '3.36',
        priceToSalesTrailing12Months: '',
        trailingPE: '58.43',
        forwardPE: '32.59',
        totalCash: '122.13M',
        totalDebt: '138M',
        sector: 'Real Estate',
        yearly: {
            0: { date: 2017, earnings: -72000, revenue: 6420000 },
            1: { date: 2018, earnings: 6985000, revenue: 14787000 },
            2: { date: 2019, earnings: 23475000, revenue: 44667000 },
            3: { date: 2020, earnings: 65730000, revenue: 116896000 }
        }
    },

    iipr: {
        symbol: 'IIPR',
        longName: 'Innovative Industrial Properties, Inc.',
        currentPrice: '210.86',
        dividendRate: '5.6',
        dividendYield: '2.64%',
        payoutRatio: '133.06%',
        marketCap: '5.04B',
        enterpriseValue: '5.12B',
        priceToBook: '3.36',
        priceToSalesTrailing12Months: '',
        trailingPE: '58.43',
        forwardPE: '32.59',
        totalCash: '122.13M',
        totalDebt: '138M',
        sector: 'Real Estate',
        yearly: {
            0: { date: 2017, earnings: -72000, revenue: 6420000 },
            1: { date: 2018, earnings: 6985000, revenue: 14787000 },
            2: { date: 2019, earnings: 23475000, revenue: 44667000 },
            3: { date: 2020, earnings: 65730000, revenue: 116896000 }
        }
    },

    abt: {
        symbol: 'ABT',
        longName: 'Abbott Laborotories',
        currentPrice: '210.86',
        dividendRate: '5.6',
        dividendYield: '2.64%',
        payoutRatio: '133.06%',
        marketCap: '5.04B',
        enterpriseValue: '5.12B',
        priceToBook: '3.36',
        priceToSalesTrailing12Months: '',
        trailingPE: '58.43',
        forwardPE: '32.59',
        totalCash: '122.13M',
        totalDebt: '138M',
        sector: 'Real Estate',
        yearly: {
            0: { date: 2017, earnings: -72000, revenue: 6420000 },
            1: { date: 2018, earnings: 6985000, revenue: 14787000 },
            2: { date: 2019, earnings: 23475000, revenue: 44667000 },
            3: { date: 2020, earnings: 65730000, revenue: 116896000 }
        }
    },

    abbv: {
        symbol: 'ABBV',
        longName: 'Abbvie, Inc.',
        currentPrice: '210.86',
        dividendRate: '5.6',
        dividendYield: '2.64%',
        payoutRatio: '133.06%',
        marketCap: '5.04B',
        enterpriseValue: '5.12B',
        priceToBook: '3.36',
        priceToSalesTrailing12Months: '',
        trailingPE: '58.43',
        forwardPE: '32.59',
        totalCash: '122.13M',
        totalDebt: '138M',
        sector: 'Real Estate',
        yearly: {
            0: { date: 2017, earnings: -72000, revenue: 6420000 },
            1: { date: 2018, earnings: 6985000, revenue: 14787000 },
            2: { date: 2019, earnings: 23475000, revenue: 44667000 },
            3: { date: 2020, earnings: 65730000, revenue: 116896000 }
        }
    },

    c: {
        symbol: 'C',
        longName: 'Citygroup Inc.',
        currentPrice: '210.86',
        dividendRate: '5.6',
        dividendYield: '2.64%',
        payoutRatio: '133.06%',
        marketCap: '5.04B',
        enterpriseValue: '5.12B',
        priceToBook: '3.36',
        priceToSalesTrailing12Months: '',
        trailingPE: '58.43',
        forwardPE: '32.59',
        totalCash: '122.13M',
        totalDebt: '138M',
        sector: 'Real Estate',
        yearly: {
            0: { date: 2017, earnings: -72000, revenue: 6420000 },
            1: { date: 2018, earnings: 6985000, revenue: 14787000 },
            2: { date: 2019, earnings: 23475000, revenue: 44667000 },
            3: { date: 2020, earnings: 65730000, revenue: 116896000 }
        }
    },

    clx: {
        symbol: 'CLX',
        longName: 'The Clorox Company',
        currentPrice: '210.86',
        dividendRate: '5.6',
        dividendYield: '2.64%',
        payoutRatio: '133.06%',
        marketCap: '5.04B',
        enterpriseValue: '5.12B',
        priceToBook: '3.36',
        priceToSalesTrailing12Months: '',
        trailingPE: '58.43',
        forwardPE: '32.59',
        totalCash: '122.13M',
        totalDebt: '138M',
        sector: 'Real Estate',
        yearly: {
            0: { date: 2017, earnings: -72000, revenue: 6420000 },
            1: { date: 2018, earnings: 6985000, revenue: 14787000 },
            2: { date: 2019, earnings: 23475000, revenue: 44667000 },
            3: { date: 2020, earnings: 65730000, revenue: 116896000 }
        }
    },
}

export class StockService {

    getStock(ticker) {
        return data[ticker.toLowerCase()];
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(data[ticker.toLowerCase()]);
    //         }, 100)
    //     });
    }
}


// fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?symbol=IIPR&region=US", {
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-key": "2d223f7ed3msh31a354bc2e0981fp1cad94jsn2995c8dcda59",
//       "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
//     }
//   })
//         .then((response) => response.json())
//         .then((stock) => console.log(stock))

