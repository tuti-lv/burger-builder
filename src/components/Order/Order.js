import React from 'react';
import classes from './Order.module.css';

import Burger from '../Burger/Burger';

const order = (props) => {
	const ingredients = [];
	for (let ingredientName in props.ingredients) {
		ingredients.push({
			name: ingredientName,
			amount: props.ingredients[ingredientName]
		});
	}

	const ingredientOutput = ingredients.map((ig) => {
		return (
			<span key={ig.name}>
				{ig.name} ({ig.amount})
			</span>
		);
	});

	return (
		<div className={classes.Order}>
			<Burger small ingredients={props.ingredients} />
			<h3>
				Price: <strong>${props.price.toFixed(2)}</strong>
			</h3>
			<p>Ingredients: </p>
			<p>{ingredientOutput}</p>
		</div>
	);
};

export default order;
