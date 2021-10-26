import './ExpenseFilter.css';

const ExpensesFilter = (props) => {

    const dropdownEventHandler = (e) => {
        props.onSelectedYearHandler(e.target.value)

    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.year} onChange={dropdownEventHandler}>
                    <option required value='2022'>2022</option>
                    <option required value='2021'>2021</option>
                    <option required value='2020'>2020</option>
                    <option required value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;