import { useState } from 'react/cjs/react.development';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';



const Expenses = ({ expenses }) => {
    const [year, setYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        setYear(selectedYear);

    }
    const filteredExpenses = expenses.filter(x => x.date.getFullYear().toString() === year);
    let expensesContent = <h3>No Expenses Found</h3>;
    if (filteredExpenses.length > 0 ){
        expensesContent = filteredExpenses.map(x =>
            <ExpenseItem key={x.id} title={x.title} amount={x.amount} date={x.date} />)
    }
    return (
        <div>

            <Card className='expenses'>
            <ExpensesFilter year={year} onSelectedYearHandler={filterChangeHandler} />
                {expensesContent}

               


            </Card>
        </div>)
}

export default Expenses;