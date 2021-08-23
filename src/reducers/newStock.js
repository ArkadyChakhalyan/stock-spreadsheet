export const newStock = (state, action) => {

    if (state === undefined) {
        return {
            stock: null,
            loading: false,
            error: null
        }
    }

    switch (action.type) {
        case 'FETCH_STOCK_REQUEST':
            return {
                loading: false,
                stock: null,
                error: null
            };
        case 'FETCH_STOCK_SUCCESS':
            return {
                loading: false,
                stock: action.stock,
                error: null
            };
        case 'FETCH_STOCK_FAILURE':
            return {
                loading: false,
                stock: null,
                error: action.error
            };
        case 'LOADING':
            return {
                ...state,
                loading: true
            };
        case 'READY':
            return {
                ...state,
                loading: false
            };
        case 'CLEAR_STATE':
            return {
                ...state,
                stock: null
            }
        default:
            return state.newStock;
    }

}