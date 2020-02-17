import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const drawerToggle = (props) => <FontAwesomeIcon icon={faEllipsisV} onClick={props.clicked} />;

export default drawerToggle;
