import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Transaction from './Transaction'

const TransactionsList = () => {
    const {transactions} = useContext(GlobalContext)

 

    return (
        <>
            <h3>Summary</h3>
            {transactions.length === 0 ? <p>There are no transactions added yet...</p> : ''}
            <ul id="list" class="list">
               {transactions && transactions.length > 0 && transactions.map(transaction => {
                   return <Transaction key={transaction.id} transaction={transaction}/>
               })}
            </ul>
        </>
    )
}

export default TransactionsList
