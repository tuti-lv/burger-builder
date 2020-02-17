import React from 'react';
import classes from './OrderSummary.module.css';
import CancelButton from '../../UI/Button/CancelButton/CancelButton';
import Button from '../../UI/Button/Button/Button';

const orderSummary = (props) => {
	const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
		return (
			<li key={igKey}>
				<span>{igKey}</span> : {props.ingredients[igKey]}
			</li>
		);
	});

	return (
		<div className={classes.OrderSummary}>
			<CancelButton alignEnd clicked={props.purchaseCanceled} />
			<h2>Your Order</h2>
			<p>Our Special Burger Containing:</p>
			<ul>{ingredientsSummary}</ul>
			<h4>Total Price : ${props.price.toFixed(2)}</h4>
			<Button clicked={props.purchaseContinued}>CONTINUE</Button>
		</div>
	);
};

export default orderSummary;
