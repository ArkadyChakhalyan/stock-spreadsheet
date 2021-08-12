const data = {
    aapl: {
        symbol: 'APPL',
        longName: 'Apple Inc.',
        longBusinessSummery: "Innovative Industrial Properties, Inc. is a self-advised Maryland corporation focused on the acquisition, ownership and management of specialized properties leased to experienced, state-licensed operators for their regulated medical-use cannabis facilities. Innovative Industrial Properties, Inc. has elected to be taxed as a real estate investment trust, commencing with the year ended December 31, 2017.",
        currentPrice: '210.86',
        dividendRate: '5.6',
        dividendYield: '2.64%',
        payoutRatio: '133.06%',
        freeCashFlow: 125424248,
        sharesOutstanding: 23926300,
        freeCashFlowPerStock: Math.round((125424248 / 23926300) * 100) / 100, 
        priceToFreeCashFlow: Math.round((5120000000 / 125424248) * 100) / 100, 
        contry: 'United States',
        sector: 'IT',
        marketCap: '5.04B',
        enterpriseValue: '5.12B',
        priceToBook: '3.36',
        priceToSalesTrailing12Months: '6.58',
        trailingPE: '58.43',
        forwardPE: '32.59',
        totalCash: '122.13M',
        totalDebt: '138M',
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
        longBusinessSummery: "Innovative Industrial Properties, Inc. is a self-advised Maryland corporation focused on the acquisition, ownership and management of specialized properties leased to experienced, state-licensed operators for their regulated medical-use cannabis facilities. Innovative Industrial Properties, Inc. has elected to be taxed as a real estate investment trust, commencing with the year ended December 31, 2017.",
        currentPrice: '210.86',
        dividendRate: '5.6',
        dividendYield: '2.64%',
        payoutRatio: '133.06%',
        contry: 'United States',
        sector: 'Real Estate',
        marketCap: '5.04B',
        freeCashFlow: 125424248,
        sharesOutstanding: 23926300,
        freeCashFlowPerStock: Math.round((125424248 / 23926300) * 100) / 100, 
        priceToFreeCashFlow: Math.round((5120000000 / 125424248) * 100) / 100, 
        enterpriseValue: '5.12B',
        priceToBook: '3.36',
        priceToSalesTrailing12Months: '5.86',
        trailingPE: '58.43',
        forwardPE: '32.59',
        totalCash: '122.13M',
        totalDebt: '138M',
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
        longBusinessSummery: "Innovative Industrial Properties, Inc. is a self-advised Maryland corporation focused on the acquisition, ownership and management of specialized properties leased to experienced, state-licensed operators for their regulated medical-use cannabis facilities. Innovative Industrial Properties, Inc. has elected to be taxed as a real estate investment trust, commencing with the year ended December 31, 2017.",
        contry: 'United States',
        sector: 'Healthcare',
        currentPrice: '210.86',
        dividendRate: '5.6',
        dividendYield: '2.64%',
        payoutRatio: '133.06%',
        marketCap: '5.04B',
        freeCashFlow: 125424248,
        sharesOutstanding: 23926300,
        freeCashFlowPerStock: Math.round((125424248 / 23926300) * 100) / 100, 
        priceToFreeCashFlow: Math.round((5120000000 / 125424248) * 100) / 100, 
        enterpriseValue: '5.12B',
        priceToBook: '3.36',
        priceToSalesTrailing12Months: '5.76',
        trailingPE: '58.43',
        forwardPE: '32.59',
        totalCash: '122.13M',
        totalDebt: '138M',
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
        longBusinessSummery: "Innovative Industrial Properties, Inc. is a self-advised Maryland corporation focused on the acquisition, ownership and management of specialized properties leased to experienced, state-licensed operators for their regulated medical-use cannabis facilities. Innovative Industrial Properties, Inc. has elected to be taxed as a real estate investment trust, commencing with the year ended December 31, 2017.",
        contry: 'United States',
        sector: 'Healthcare',
        currentPrice: '210.86',
        dividendRate: '5.6',
        dividendYield: '2.64%',
        payoutRatio: '133.06%',
        marketCap: '5.04B',
        freeCashFlow: 125424248,
        sharesOutstanding: 23926300,
        freeCashFlowPerStock: Math.round((125424248 / 23926300) * 100) / 100, 
        priceToFreeCashFlow: Math.round((5120000000 / 125424248) * 100) / 100, 
        enterpriseValue: '5.12B',
        priceToBook: '3.36',
        priceToSalesTrailing12Months: '5.86',
        trailingPE: '58.43',
        forwardPE: '32.59',
        totalCash: '122.13M',
        totalDebt: '138M',
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
        longBusinessSummery: "Innovative Industrial Properties, Inc. is a self-advised Maryland corporation focused on the acquisition, ownership and management of specialized properties leased to experienced, state-licensed operators for their regulated medical-use cannabis facilities. Innovative Industrial Properties, Inc. has elected to be taxed as a real estate investment trust, commencing with the year ended December 31, 2017.",
        currentPrice: '210.86',
        contry: 'United States',
        sector: 'Financial',
        dividendRate: '5.6',
        dividendYield: '2.64%',
        payoutRatio: '133.06%',
        marketCap: '5.04B',
        freeCashFlow: 125424248,
        sharesOutstanding: 23926300,
        freeCashFlowPerStock: Math.round((125424248 / 23926300) * 100) / 100, 
        priceToFreeCashFlow: Math.round((5120000000 / 125424248) * 100) / 100, 
        enterpriseValue: '5.12B',
        priceToBook: '3.36',
        priceToSalesTrailing12Months: '5.86',
        trailingPE: '58.43',
        forwardPE: '32.59',
        totalCash: '122.13M',
        totalDebt: '138M',
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
        longBusinessSummery: "Innovative Industrial Properties, Inc. is a self-advised Maryland corporation focused on the acquisition, ownership and management of specialized properties leased to experienced, state-licensed operators for their regulated medical-use cannabis facilities. Innovative Industrial Properties, Inc. has elected to be taxed as a real estate investment trust, commencing with the year ended December 31, 2017.",
        contry: 'United States',
        sector: 'Consumer Defensive',
        currentPrice: '210.86',
        dividendRate: '5.6',
        dividendYield: '2.64%',
        payoutRatio: '133.06%',
        freeCashFlow: 125424248,
        sharesOutstanding: 23926300,
        freeCashFlowPerStock: Math.round((125424248 / 23926300) * 100) / 100, 
        priceToFreeCashFlow: Math.round((5120000000 / 125424248) * 100) / 100, 
        marketCap: '5.04B',
        enterpriseValue: '5.12B',
        priceToBook: '3.36',
        priceToSalesTrailing12Months: '5.74',
        trailingPE: '58.43',
        forwardPE: '32.59',
        totalCash: '122.13M',
        totalDebt: '138M',
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


