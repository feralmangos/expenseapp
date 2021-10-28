import {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) =>{
const [isEditing,setIsEditing] = useState(false);    
const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData = {
        ...enteredExpenseData,
        id:Math.random().toString()
    };
    props.onAddExpense(expenseData);
    console.log(expenseData)
    setIsEditing(false)
};

const startEditingHandler = () =>{
    return setIsEditing(true);
}

const stopEditingHandler = ()=>{
    return setIsEditing(false)
}

return(
    <div className='new-expense'>
       {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
       {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
)

};

export default NewExpense;