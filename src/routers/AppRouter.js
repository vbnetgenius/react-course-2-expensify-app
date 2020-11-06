import React from 'react';
import { BrowserRouter, Route, Switch, NavNavLink, NavLink }  from 'react-router-dom';
import PageExpenseDashboard from './../components/PageExpenseDashboard';
import PageEditExpense from '../components/PageEditExpense';
import PageAbout from './../components/PageAbout';
import PageHelp from './../components/PageHelp';
import PageNotFound from './../components/PageNotFound';
import PageProfile from './../components/PageProfile';
import PageUsers from './../components/PageUsers';
import PageAddExpense from './../components/PageAddExpense';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <li><NavLink exact={true} activeClassName="is-active" to={"/"}>Dashboard</NavLink></li>
            <li><NavLink exact={true} activeClassName="is-active" to={"/create"}>Create Expense</NavLink></li>
            <li><NavLink exact={true} activeClassName="is-active" to={"/edit"}>Edit Expense</NavLink></li>
            <li><NavLink exact={true} activeClassName="is-active" to={"/help"}>Help</NavLink></li>
            <li><NavLink exact={true} activeClassName="is-active" to={"/users"}>Users</NavLink></li>
            <li><NavLink exact={true} activeClassName="is-active" to={"/profile"}>Profile</NavLink></li>
        </ul>
    </header>
);

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path={"/"} component={PageExpenseDashboard} exact={true} />        
                <Route path={"/dashboard"} component={PageExpenseDashboard} />
                <Route path={"/create"} component={PageAddExpense} />
                <Route path={"/edit/:id"} component={PageEditExpense} />
                <Route path={"/help"} component={PageHelp} />
                <Route path={"/about"} component={PageAbout}  />
                <Route path={"/profile"} component={PageProfile}  />
                <Route path={"/users"} component={PageUsers} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </BrowserRouter>    
);

export default AppRouter;