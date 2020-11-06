import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = (props) => (
    <div>
        <h1>Siavash</h1>
        <NavLink to="/dashboard" activeClassName="bold">Dashboard</NavLink>
        <NavLink to="/profile" activeClassName="bold">Profile</NavLink>
        <NavLink to="/users" activeClassName="bold">Users</NavLink>
        <NavLink to="/about" activeClassName="bold">About</NavLink>
    </div>
);

export default Header;