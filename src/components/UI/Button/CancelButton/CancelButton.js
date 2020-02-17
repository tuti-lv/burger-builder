import React from 'react';
import classes from './CancelButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const cancelButton = (props) => (
	<button
		className={props.alignEnd ? classes.CancelButton + ' ' + classes.AlignEnd : classes.CancelButton}
		onClick={props.clicked}
	>
		<FontAwesomeIcon icon={faTimes} />
		{props.children}
	</button>
);

export default cancelButton;
