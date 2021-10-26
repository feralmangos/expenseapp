import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


const ExpenseItem = ({ amount, date }) => {

    const [title,setTitle] = useState('1');

    const clickHandler = () =>{
        setTitle('2')
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <p className='expense-item__price' >{amount}</p>
            </div>
            <button onClick={clickHandler}> Click Me! </button>
        </Card>
    )

}

export default ExpenseItem;

