import React from 'react';
import classes from './BuildControl.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const buildControl = (props) => {
	return (
		<div className={classes.BuildControl}>
			<div className={classes.Label}>{props.label}</div>
			<button className={classes.Less} onClick={props.removed} disabled={props.disabled}>
				<FontAwesomeIcon icon={faMinus} />
			</button>
			<button className={classes.More} onClick={props.added}>
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</div>
	);
};

export default buildControl;
