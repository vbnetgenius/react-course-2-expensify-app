import React from 'react';
import ReactDOM from 'react-dom';
import {  Provider  } from 'react-redux';
import AppRouter from './routers/AppRouter';
import store from './store/configureStore';
import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import './style/styles.scss';

store.dispatch(addExpense({
    amount: 1000,
    description: 'سیاوش ابراهیمی اینجاست',
    note: 'سیاوش ابراهیمی در ایران زندگی می کند',
    createdAt: 1,
}));

store.dispatch(addExpense({
    amount: 2000,
    description: 'یونس ابراهیمی',
    note: 'یونس ابراهیمی',
    createdAt: 2,
}));

store.dispatch(addExpense({
    amount: 1000,
    description: 'سیاوش ابراهیمی اینجاست',
    note: '-',
    createdAt: 32400,
}));

// setTimeout(() => {
//     store.dispatch(addExpense({
//         note: '---',
//         description: '----',
//         amount: 100,
//         createdAt: 25000,
//     }));
// }, 1500);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));