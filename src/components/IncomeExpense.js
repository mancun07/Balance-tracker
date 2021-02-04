import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'


const IncomeExpense = () => {
    const {transactions} = useContext(GlobalContext)
    console.log(transactions)

    const income = transactions
        .filter(el => el.amount  > 0)
        .map(el => el.amount)
        .reduce((acc, el) => acc += el, 0)
        .toFixed(2)

    const expense = transactions
        .filter(el => el.amount < 0)
        .map(el => el.amount)
        .reduce((acc, el) => acc += el, 0)
        .toFixed(2) 

   

    return (
        <div className="inc-exp-container">    
            <div>
            <h4>Income</h4>
            <p id="money-plus" class="money plus">+${income}</p>
            </div>
            <div>
            <h4>Expense</h4>
            <p id="money-minus" class="money minus">-${Math.abs(expense)}</p>
            </div>
        </div>
    )
}

export default IncomeExpense
