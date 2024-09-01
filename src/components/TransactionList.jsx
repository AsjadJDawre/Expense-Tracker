import React,{useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';
import Transaction from './Transaction';
export default function TransactionList() {
  const {transaction} = useContext(GlobalContext)
  console.log(transaction);

  return (
    <>
  <h3>History</h3>
      <ul id="list" class="list">
        {transaction.map(transaction=>(
          <Transaction key={transaction.id} transaction={transaction}/>
        
        ))}
      </ul>
  </>

  );
}
