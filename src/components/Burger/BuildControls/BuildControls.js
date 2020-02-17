import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import Button from '../../UI/Button/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

const controls = [
	{ label: 'Lettuce', type: 'lettuce' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' }
];

const buildControls = (props) => {
	return (
		<div className={classes.BuildControls}>
			{controls.map((ctrl) => (
				<BuildControl
					key={ctrl.label}
					label={ctrl.label}
					removed={() => props.ingredientRemoved(ctrl.type)}
					added={() => props.ingredientAdded(ctrl.type)}
					disabled={props.disabled[ctrl.type]}
				/>
			))}
			<p>
				Total Price: <strong>${props.price.toFixed(2)}</strong>
			</p>
			<Button disabled={!props.purchaseable} clicked={props.ordered}>
				<FontAwesomeIcon className={classes.hamburgerIcon} icon={faHamburger} />
				{props.isAuth ? 'ORDER' : 'Sign up to order'}
			</Button>
		</div>
	);
};

export default buildControls;
