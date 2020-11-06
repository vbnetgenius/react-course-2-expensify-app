import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const PageAddExpense = (props) => (
    <React.Fragment>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={(payload) => { 
            props.dispatch(addExpense({
                ...payload
            }));  
         }} />
    </React.Fragment>
);

export default connect()(PageAddExpense);