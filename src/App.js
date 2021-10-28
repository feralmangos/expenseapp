import { useState } from "react/cjs/react.development";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Background from "./components/UI/Background/Background";
import './components/UI/App.css'
const crapData = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(crapData);


  const addExpenseHandler = expense => {
    console.log('in app.js');
    console.log(expense);
    setExpenses(prevExpense => {
      return [expense,
        ...prevExpense]
    })
  }



  return (
    <div className='wrapper'>
      <Expenses expenses={expenses} />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Background />
    </div>
  );
}

export default App;
