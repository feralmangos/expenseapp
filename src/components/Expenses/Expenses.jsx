import { useState } from 'react/cjs/react.development';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';



const Expenses = ({ expenses }) => {
    const [year, setYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        setYear(selectedYear);

    }
    const filteredExpenses = expenses.filter(x => x.date.getFullYear().toString() === year);

    return (
        <li>

            <Card className='expenses'>
              <h1 style={{color:'white'}}>Expenses App by Gastón Medici</h1>
                <ExpensesFilter year={year} onSelectedYearHandler={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </li>)
}

export default Expenses;