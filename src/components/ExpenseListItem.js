import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

export const ExpenseListItem = (props) => {
    const { id, description, amount, createdAt } = props;
    return ( 
        <div>
            <h1>{description}</h1>
            <p>{amount} : {createdAt}</p>
            <button onClick={() => { props.dispatch( removeExpense( {id} ) ); } }>Delete</button>
        </div>
     );
}
 
export default connect()(ExpenseListItem);