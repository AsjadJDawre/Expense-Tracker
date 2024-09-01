import React, { useContext } from 'react'
import '../App.css'
import { GlobalContext } from '../Context/GlobalState'
export default function Balance() {
  const {transaction}=useContext(GlobalContext);
  const amount =transaction.map(transaction=>transaction.amount);
  const total =amount.reduce((acc,item)=>(acc+=item),0).toFixed(2);
  return (
    <> 
    <h4 id="balanceHeading">Your Balance </h4>
    <h1 id='balance'> {total}</h1>
    </>
  )
}
