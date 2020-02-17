import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
	return (
		<button
			className={props.noMargin ? classes.Button + ' ' + classes.NoMargin : classes.Button}
			onClick={props.clicked}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
};

export default button;
