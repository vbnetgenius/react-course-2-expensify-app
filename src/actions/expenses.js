import { v4 as uuid }  from 'uuid';

// ADD_EXPENSE
export const addExpense = ({amount = '' , note = '', description = '', createdAt = ''} = {}) => ({
    type: 'ADD_EXPENSE',
    payload: {
        id: uuid(),
        amount,
        note,
        description,
        createdAt
    },
});

// REMOVE_EXPENSE
export const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    payload: {
        id
    },
});

// EDIT_EXPENSE
export const editExpense = ({id, ...rest}) => ({
    type: 'EDIT_EXPENSE',
    payload: {
        id,
        ...rest,
    },
});