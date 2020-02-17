import React from 'react';
import classes from './NavItems.module.css';
import NavItem from '../NavItems/NavItem/NavItem';

const navItems = (props) => (
	<ul className={classes.NavItems}>
		<NavItem link="/burger-builder">Burger Builder</NavItem>
		{props.isAuth ? <NavItem link="/orders">Orders</NavItem> : null}
		{props.isAuth ? <NavItem link="/logout">Logout</NavItem> : <NavItem link="/auth">Authenticate</NavItem>}
	</ul>
);

export default navItems;
