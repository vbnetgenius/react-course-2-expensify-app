import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import { connect } from 'react-redux';

const PageExpenseDashboard = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default PageExpenseDashboard;