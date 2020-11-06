import React from 'react';
import ReactDOM from 'react-dom';
import {  Provider  } from 'react-redux';
import AppRouter from './routers/AppRouter';
import store from './store/configureStore';
import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import './style/styles.scss';

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));