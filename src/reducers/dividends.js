export const dividends = (state, action) => {

    const date = new Date();
    const currentYear = date.getFullYear();

    if (state === undefined) {
       
        return {
            dividendsRecieved: [
                [
                    currentYear - 1,
                    [
                        ['January', `$${0}`],
                        ['February', `$${0}`],
                        ['March', `$${0}`],
                        ['April', `$${0}`],
                        ['May', `$${0}`],
                        ['June', `$${0}`],
                        ['July', `$${0}`],
                        ['August', `$${0}`],
                        ['September', `$${0}`],
                        ['October', `$${0}`],
                        ['November', `$${0}`],
                        ['December', `$${0}`],
                    ],
                    0
                ],
                [
                    currentYear,
                    [
                        ['January', `$${0}`],
                        ['February', `$${0}`],
                        ['March', `$${0}`],
                        ['April', `$${0}`],
                        ['May', `$${0}`],
                        ['June', `$${0}`],
                        ['July', `$${0}`],
                        ['August', `$${0}`],
                        ['September', `$${0}`],
                        ['October', `$${0}`],
                        ['November', `$${0}`],
                        ['December', `$${0}`],
                    ],
                    0
                ]
            ]

        }
    }

    switch (action.type) {
        case 'ADD_DIVIDEND':
            return addDividend(state.dividends, action);
        case 'ADD_YEAR':
            return addYear(state.dividends, action);
        default:
            return state.dividends;
    }
};

/**
 * Function addDividend (when recieved dividend have been added or changed).
 * @param {object} state - Current state.
 * @param {object} action - Redux action.
 * @returns {object} New state with added dividend.
 */
const addDividend = (state, action) => {

    const { year, month, paid } = action;
    const { dividendsRecieved } = state;

    const yearIdx = dividendsRecieved.findIndex((item) => item[0] === year);
    const monthIdx = dividendsRecieved[yearIdx][1].findIndex((item) => item[0] === month);

    const newPayment = [
        month,
        `$${+paid}`,
    ];

    const newDividendsData =  [
        ...dividendsRecieved[yearIdx][1].slice(0, monthIdx),
        newPayment,
        ...dividendsRecieved[yearIdx][1].slice(monthIdx + 1),
    ];

    let total = 0;
    for (let i = 0; i < newDividendsData.length; i++) {
        total += +newDividendsData[i][1].slice(1);
    }

    const newYear = [
        year,
        newDividendsData,
        Math.round(total * 100) / 100
    ];

    const newDividendsRecieved = [
        ...dividendsRecieved.slice(0, yearIdx),
        newYear,
        ...dividendsRecieved.slice(yearIdx + 1)
    ];

    return {
        ...state,
        dividendsRecieved: newDividendsRecieved
    }
};

/**
 * Function addYear (when new year have been added).
 * @param {object} state - Current state.
 * @param {object} action - Redux action.
 * @returns {object} New state with new empty year of dividends.
 */
const addYear = (state, action) => {

    const { dividendsRecieved } = state;
    const { year } = action;

    const idx = dividendsRecieved.findIndex((item) => item[0] === year);

    if (idx === -1) {
        const newYear = [
            year,
            [
                ['January', `$${0}`],
                ['February', `$${0}`],
                ['March', `$${0}`],
                ['April', `$${0}`],
                ['May', `$${0}`],
                ['June', `$${0}`],
                ['July', `$${0}`],
                ['August', `$${0}`],
                ['September', `$${0}`],
                ['October', `$${0}`],
                ['November', `$${0}`],
                ['December', `$${0}`],
            ],
            0
        ];

        const newDividendsRecieved = [
            newYear,
            ...dividendsRecieved
        ];

        return {
            ...state,
            dividendsRecieved: newDividendsRecieved
        }
    } else return state;
};