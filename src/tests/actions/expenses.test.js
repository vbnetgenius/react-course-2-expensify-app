import { addExpense, editExpense, removeExpense } from './../../actions/expenses';

test('should setup removeExpense action object', () => {
    const action = removeExpense({ id: '123-abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        payload: {
            id: '123-abc',
        },
    });
});


test('should setup editExpense action object', () => {
    const result = editExpense({
        description: 'siavash',
        note: 'siavash',
        amount: 1000,
    });
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        payload: {
            id: result.payload.id,
            description: 'siavash',
            note: 'siavash',
            amount: 1000,
        },
    });
});


test('should setup addExpense action object with provided values', () => {
    const expenseData = {
        description: 'description',
        note: 'note',
        amount: 1000,
    };
    const newExpense = addExpense(expenseData);
    expect(newExpense).toEqual({
        type: 'ADD_EXPENSE',
        payload: {
            ...expenseData,
            id: expect.any(String),
            createdAt: expect.any(String),
        },
    });
});

test('should setup addExpense action object with no values', () => {
    const result = addExpense();
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        payload: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: '',
            createdAt: '',
        },
    });
});
