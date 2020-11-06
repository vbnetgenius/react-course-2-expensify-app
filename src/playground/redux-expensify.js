import { createStore, combineReducers } from 'redux';
import {v4 as uuid} from 'uuid';

// Reducers
// ADD_EXPENSE
const addExpense = ({amount, note, description, createdAt}) => ({
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
const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    payload: {
        id
    },
});
// EDIT_EXPENSE
const editExpense = ({id, ...rest}) => ({
    type: 'EDIT_EXPENSE',
    payload: {
        id,
        ...rest,
    },
});
const expensedReducerDefaultState = [];
const expensesReducer = (state = expensedReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                {...action.payload}
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(e => e.id != action.payload.id);
        case 'EDIT_EXPENSE':
            return state.map(e => {
                if (e.id === action.payload.id) {
                    return {
                        ...e,
                        ...action.payload,
                    };
                }
                return e;
            });
        default:
            return state;
    }
};

const setTextFilter = ({ text }) => ({
    type: 'SET_TEXT_FILTER',
    payload: {
        text
    },
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

const sortByTime = () => ({
    type: 'SORT_BY_TIME',
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

const setStartDate = ({value}) => ({
    type: 'SET_START_DATE',
    payload: {
        value
    }
});

const setEndDate = ({value}) => ({
    type: 'SET_END_DATE',
    payload: {
        value
    },
});

const filterReducerDefualtState = {
    text: '',
    sortBy: '', // date or amount
    startDate: undefined,
    endDate: undefined,
};
const filtersReducer = (state = filterReducerDefualtState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.payload.text,
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date',
            };
        case 'SORT_BY_TIME':
            return {
                ...state,
                sortBy: 'time',
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount',
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.payload.value,
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.payload.value,
            };
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    console.warn(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({
    _id: uuid(),
    amount: 10000,
    description: 'خرید بستنی',
    note: '',    
    createdAt: 1,
}));

const expenseTwo = store.dispatch(addExpense({
    note: '',
    amount: 12500,
    description: 'خرید شاتالو',
    createdAt: 100,
}));

// store.dispatch(editExpense({
//     id: expenseOne.payload.id,
//     description: 'Some description here ...',
// }));

// store.dispatch(editExpense({
//     id: expenseTwo.payload.id,
//     amount: "100,1000 T",
// }));

// store.dispatch(setTextFilter({text: 'siavash ebrahimi'}));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
store.dispatch(setStartDate({value: 2}));
// store.dispatch(setEndDate({value: '1400/01/01'}));