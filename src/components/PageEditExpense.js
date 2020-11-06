import React from 'react';

const PageEditExpense = (props) => {
    const expenseID = props.match.params.id;
    return <div>Editing: {expenseID}</div>;
} 

export default PageEditExpense;