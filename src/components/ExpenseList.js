import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import { v4 as uuid } from 'uuid';

export const ExpenseList = (props) => {    
    return <div>
    {
        props.expenses.length === 0 ? (
            <p>No expenses</p>
        ) : (
            props.expenses.map(e => <ExpenseListItem key={uuid()} {...e} />)
        )
    }
</div>;
}
 
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
};

export default connect(mapStateToProps)(ExpenseList);