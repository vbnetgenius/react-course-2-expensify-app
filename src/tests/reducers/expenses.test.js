import expensesReducer from './../../reducers/expenses';
import { expenses } from './../fixtures/expenses';

test('should test default state', () => {
    const result = expensesReducer(undefined, {
        type: '@@INIT',
    });
    expect(result).toEqual([]);    
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        payload: {
            id: expenses[1].id,
        },
    };
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([expenses[0], expenses[2]]);
});

test('should add new expense to state', () => {
    const newExpenseData = {
        id: 11,
        description: 'خرید لوازم خانه',
        note: '-',
        amount: 1100000,
        createdAt: 10,
    };
    const action = {
        type: 'ADD_EXPENSE',
        payload: {
            ...newExpenseData,
        },
    };
    const newState = expensesReducer(expenses, action);
    expect(newState).toEqual([
        ...expenses,
        newExpenseData,
    ]);
});
