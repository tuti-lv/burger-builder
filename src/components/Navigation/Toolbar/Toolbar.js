import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
	<header className={classes.Toolbar}>
		<div className={classes.DrawerToggle}>
			<DrawerToggle clicked={props.toggleSideDrawer} />
		</div>
		<div className={classes.Logo}>
			<Link to="/">
				<Logo />
			</Link>
		</div>
		<nav className={classes.DesktopOnly}>
			<NavItems isAuth={props.isAuth} />
		</nav>
	</header>
);

export default toolbar;
