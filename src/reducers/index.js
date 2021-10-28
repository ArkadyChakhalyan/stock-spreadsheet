import { dividends } from "./dividends";
import { newStock } from "./newStock";
import { portfolio } from "./portfolio";

export const reducer = (state, action) => {

    return {
        portfolio: portfolio(state, action),
        dividends: dividends(state, action),
        newStock: newStock(state, action)
    }
};
