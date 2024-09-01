import React, { useState,useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

export default function AddTransaction() {
    const [text,setText]=useState('')
    const [amount,setAmount]=useState(0)
    const{addTransaction}=useContext(GlobalContext);


    const handleSubmit=(e)=>{
        e.preventDefault();
        const newTransaction={
            id:Math.floor(Math.random() * 100000000),
            text,
            amount:+amount
        }
        addTransaction(newTransaction)
           // Reset the input fields
    setText('');
    setAmount('');
    }
  return (
    <>
    <h3>Add new transaction</h3>
    <form onSubmit={handleSubmit} id="form">
      <div className="form-control">
        <label for="text">Text</label>
        <input type="text" id="text" placeholder="Enter text..." value={text}  onChange={(e)=>setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label for="amount"
          >Amount <br />
          (negative - expense, positive - income)</label
        >
        <input type="number" id="amount" placeholder="Enter amount..."value={amount}  onChange={(e)=>setAmount(e.target.value)} />
      </div>
      <button className="btn" type="submit">Add transaction</button>
    </form> </>
     )
}
