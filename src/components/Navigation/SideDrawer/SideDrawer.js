import React from 'react';
import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import DrawerToggle from './DrawerToggle/DrawerToggle';

const sideDrawer = (props) => {
	let attachedClasses = [ classes.SideDrawer, classes.Close ];
	if (props.open) {
		attachedClasses = [ classes.SideDrawer, classes.Open ];
	}

	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClasses.join(' ')} onClick={props.closed}>
				<div className={classes.DrawerToggle}>
					<DrawerToggle clicked={props.closed} />
				</div>
				<div className={classes.Logo}>
					<Logo />
				</div>
				<nav>
					<NavItems isAuth={props.isAuth} />
				</nav>
			</div>
		</Aux>
	);
};

export default sideDrawer;
