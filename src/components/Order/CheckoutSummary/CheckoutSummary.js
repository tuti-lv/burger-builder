import React from 'react';
import classes from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger';
import CancelButton from '../../UI/Button/CancelButton/CancelButton';
import Button from '../../UI/Button/Button/Button';

const checkoutSummary = (props) => {
	return (
		<div className={classes.CheckoutSummary}>
			<h1>Please Review Your Order:</h1>
			<div className={classes.Burger}>
				<Burger ingredients={props.ingredients} />
			</div>
			<Button clicked={props.checkoutContinue}>Continue</Button>
			<CancelButton clicked={props.checkoutCancelled}> Cancel Order</CancelButton>
		</div>
	);
};

export default checkoutSummary;
