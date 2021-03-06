export const newStock = (state, action) => {

    if (state === undefined) {
        return {
            stock: null,
            loading: false,
            fakeLoading: false,
            error: null
        }
    }

    switch (action.type) {
        case 'FETCH_STOCK_REQUEST':
            return {
                loading: true,
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
                error: true
            };
        case 'LOADING':
            return {
                ...state,
                fakeLoading: true
            };
        case 'READY':
            return {
                ...state,
                fakeLoading: false
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