import './Expense.css'
import React from "react";

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expense = props => {

    return (
        
        <Card className='expenses'>

            {
                props.item.map(
                    expense => (

                        <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />

                    )
                )
            }

        </Card>
    );


}

export default Expense;