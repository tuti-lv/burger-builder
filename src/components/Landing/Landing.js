import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Landing.module.css';
import BurgerImg from '../../assets/images/Burger.png';
import Button from '../UI/Button/Button/Button';

const landing = () => {
	return (
		<div className={classes.Landing}>
			<div className={classes.Header}>
				<h1>Burger Builder App</h1>
				<p>You are one step away from a delicious burger... So what are you waiting for?</p>
				<Link to="/burger-builder">
					<Button noMargin>Start Building Now!</Button>
				</Link>
			</div>
			<div className={classes.BurgerImg}>
				<img src={BurgerImg} alt="Burger" />
			</div>
		</div>
	);
};

export default landing;
