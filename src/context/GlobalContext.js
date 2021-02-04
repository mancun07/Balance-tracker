import {createContext, useReducer} from 'react';
import GlobalReducer from './GlobalReducer';
export const GlobalContext = createContext();

const initialState = {
    transactions: [
        // { id: 1, text: 'Purchase of item1', amount: -200 },
        // { id: 2, text: 'Salary1', amount: +500 },
        // { id: 3, text: 'Purchase of item2', amount: -300 },
        // { id: 4, text: 'Salary2', amount: +500 }
    ],
    current: null
}

const GlobalContextProvider = (props) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState)

    const addTransaction = (transaction) => {
        return  dispatch({type: 'ADD_TRANSACTION', payload: transaction})
    }

    const deleteTransaction = (id) => {
        return  dispatch({type: 'DELETE_TRANSACTION', payload: id})
    }

    const updateTransaction = (transaction) => {
        return dispatch({type: 'UPDATE_TRANSACTION', payload: transaction})
    }

    const setCurrent = (current) => {
        return dispatch({type: 'SET_CURRENT', payload: current})
    }

    const clearCurrent = () => {
        return dispatch({type: 'CLEAR_CURRENT'})
    }


    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            current: state.current,
            addTransaction,
            deleteTransaction,
            updateTransaction,
            setCurrent,
            clearCurrent
          
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;