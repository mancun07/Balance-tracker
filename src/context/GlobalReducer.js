const GlobalReducer = (state, action) => {
    switch (action.type) {

        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            } 

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(el => {
                    return el.id !== action.payload
                })
            }

        case 'UPDATE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.map(el => {
                    return el.id === action.payload.id ? action.payload : el
                })
            }

        case 'SET_CURRENT':
            return {
                ...state,
                current: action.payload
            }

        case 'CLEAR_CURRENT':
            return {
                ...state,
                current: null
            }

        default: 
        return state
    }
}

export default GlobalReducer