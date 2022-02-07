import Expense from './Components/Expense/Expense';
import React, {useState} from "react";
import NewExpense from './Components/NewExpense/NewExpense';

let DUMMY_EXPENSE = [];



const App = () => {

  const [expenses, setExpense] = useState(DUMMY_EXPENSE);

  const addExpensehandler = (recivedata) => {

    const updatedarray = [recivedata, ...expenses];

    setExpense(updatedarray);
  }

  return(
    <div>
      <NewExpense addEhandle = {addExpensehandler}/>
      <Expense item = {expenses}/>
      </div>
      
       
  )
}

export default App;