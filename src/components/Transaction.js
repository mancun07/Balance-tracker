import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext';

const Transaction = ({transaction}) => {
    const {deleteTransaction, setCurrent} = useContext(GlobalContext);

    const sign = transaction.amount > 0 ? '+' : '-' ;

    return (
        <li class={transaction.amount > 0 ? 'plus' : 'minus'} onClick={()=>setCurrent(transaction)}>
            {transaction.text}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button class="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}

export default Transaction
