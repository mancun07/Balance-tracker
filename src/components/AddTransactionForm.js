import React, {useState, useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalContext';

const AddTransactionForm = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const {addTransaction, current, updateTransaction, clearCurrent} = useContext(GlobalContext)

    useEffect(() => {
        if (current) {
            setText(current.text);
            setAmount(current.amount);
            document.querySelectorAll('input').forEach(el => {
                el.style.outline = 'crimson 1px solid';
            })
        }
    }, [current])

    const onSubmitForUpdate = (e) => {
        e.preventDefault();
        if (text === '' || amount === '') {
            alert('Please, enter the both fields')
        } else {
        const updatedTransaction = {
            text, amount: parseInt(amount),
            id: current.id
        }
        updateTransaction(updatedTransaction);
        setText('');
        setAmount(0);
        clearCurrent();
        document.querySelectorAll('input').forEach(el => {
            el.style.outline = 'none';
        })
    }
}



    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '' || amount === '') {
            alert('Please, enter the both fields')
        } else {
            console.log(text, amount)
            let newTransaction = {
                text, amount: parseInt(amount),
                id: Math.floor(Math.random() * 10000)
            }
            console.log(newTransaction)
            addTransaction(newTransaction)
            setText('');
            setAmount(0);
        }
    }

    return (
    <>
        <h3>Add new transaction</h3>
        <form id="form" onSubmit={onSubmit}>
            <div class="form-control">
                <label for="text">Text</label>
                <input type="text" value={text} onChange={e => setText(e.target.value)} id="text" placeholder="Enter text..." />
            </div>
            <div class="form-control">
                <label for="amount">Amount <br />(negative - expense, positive - income)</label>
                <input type="number" value={amount} id="amount" onChange={e => setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button class="btn">Add transaction</button>
        </form> 
        <form onSubmit={onSubmitForUpdate}>
            <button class="btn btn-crimson">Update transaction</button>
        </form>
    </>
    )
}

export default AddTransactionForm
