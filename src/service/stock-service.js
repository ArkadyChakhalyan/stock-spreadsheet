const data = {
    aapl: {
        symbol: 'AAPL',
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
        sector: 'Technology',
        marketCap: '5.04B',
        enterpriseValue: '5.12B',
        priceToBook: '3.36',
        priceToSalesTrailing12Months: '6.58',
        trailingPE: '58.43',
        forwardPE: '32.59',
        totalCash: '122.13M',
        totalDebt: '138M',
        yearly: {
            0: { date: 2017, earnings: 48000, revenue: 229000 },
            1: { date: 2018, earnings: 59000, revenue: 265000 },
            2: { date: 2019, earnings: 55000, revenue: 260000 },
            3: { date: 2020, earnings: 57000, revenue: 274000 }
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
            0: { date: 2017, earnings: -0.072, revenue: 6.4 },
            1: { date: 2018, earnings: 6.98, revenue: 14.78 },
            2: { date: 2019, earnings: 23.47, revenue: 44.6 },
            3: { date: 2020, earnings: 65.73, revenue: 116.89 }
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
            0: { date: 2017, earnings: 52000, revenue: 175000 },
            1: { date: 2018, earnings: 32000, revenue: 215000 },
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
            0: { date: 2017, earnings: -5700, revenue: 70000 },
            1: { date: 2018, earnings: 1800, revenue: 66000 },
            2: { date: 2019, earnings: 6500, revenue: 66000 },
            3: { date: 2020, earnings: 1100, revenue: 58000 }
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
            
        }
    },
}

export class StockService {

    // getRes = async (stock) => {
    //     const res = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?symbol=${stock}&region=US`);

    //     if(!res.ok) {
    //         throw new Error (`Could not fetch ${stock}`) + `, recieved ${res.status}`
    //     }

    //     return await res.json();
    // }

    async getStock(ticker) {
        // return data[ticker.toLowerCase()];
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data[ticker.toLowerCase()]);
            }, 600)
        });
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


// export default class SwapiService {

//     _apiBase = 'https://swapi.dev/api'
//     _imageBase = 'https://starwars-visualguide.com/assets/img'
  
//     getResource = async (url) => {
//       const res = await fetch(`${this._apiBase}${url}`);
  
//       if (!res.ok) {
//         throw new Error(`Could not fetch ${url}` +
//           `, recieved ${res.status}`)
//       }
  
//       return await res.json();
//     }
  
//     getAllPeople = async () => {
//       const res = await this.getResource(`/people/`);
//       return res.results.map(this._transformPerson);
//     }
  
//     getPerson = async (id) => {
//       const person = await this.getResource(`/people/${id}/`);
//       return this._transformPerson(person);
//     }
  
//     getAllPlanets = async () => {
//       const res = await this.getResource(`/planets/`);
//       return res.results.map(this._transformPlanet);
//     }
  
//     getPlanet = async (id) => {
//       const planet = await this.getResource(`/planets/${id}/`);
//       return this._transformPlanet(planet);
//     }
  
//     getAllStarships = async () => {
//       const res = await this.getResource(`/starships/`);
//       return res.results.map(this._transformStarship);
//     }
  
//     getStarship = async (id) => {
//       const starship = await this.getResource(`/starships/${id}/`);
//       return this._transformStarship(starship);
//     }
  
//     getPersonImage = ({id}) => {
//       return `${this._imageBase}/characters/${id}.jpg`;
//     }
  
//     getPlanetImage = ({id}) => {
//       return `${this._imageBase}/planets/${id}.jpg`;
//     }
  
//     getStarshipImage = ({id}) => {
//       return `${this._imageBase}/starships/${id}.jpg`;
//     }
  
//     _extractId = (item) => {
//       const idRegExp = /\/([0-9]*)\/$/;
//       console.log(item)
//       return item.url.match(idRegExp)[1];
//     }
  
//     _transformPlanet = (planet) => {
//       return {
//         id: this._extractId(planet),
//         name: planet.name,
//         population: planet.population,
//         rotationPeriod: planet.rotation_period,
//         diameter: planet.diameter
//       };
//     }
  
//     _transformPerson = (person) => {
//       return {
//         id: this._extractId(person),
//         name: person.name,
//         gender: person.gender,
//         birthYear: person.birth_year,
//         eyeColor: person.eye_color
//       };
//     }
  
//     _transformStarship = (starship) => {
//       return {
//         id: this._extractId(starship),
//         name: starship.name,
//         model: starship.model,
//         manufacturer: starship.manufacturer,
//         costInCredits: starship.cost_in_credits,
//         length: starship.length,
//         crew: starship.crew,
//         passengers: starship.passengers,
//         cargoCapacity: starship.cargo_capacity
//       };
//     }
//   }


