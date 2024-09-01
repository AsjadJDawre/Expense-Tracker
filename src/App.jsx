import { useState } from 'react'
import { Header } from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

import { GlobalProvider } from './Context/GlobalState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <div className="container mx-auto flex flex-col items-center mt-5">
      <GlobalProvider>
    <Balance />
     
    <IncomeExpense/>
    <TransactionList/>
    <AddTransaction/>
    </GlobalProvider>
    </div>
    </>
  )
}

export default App
