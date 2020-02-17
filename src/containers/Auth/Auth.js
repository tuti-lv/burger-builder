import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import classes from './Auth.module.css';
import * as actionCreators from '../../store/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';

class Auth extends Component {
	state = {
		controls: {
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'E-mail Address'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Password'
				},
				value: '',
				validation: {
					required: true,
					length: 6
				},
				valid: false,
				touched: false
			}
		},
		isSignUp: false
	};

	componentDidMount() {
		if (!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
			this.props.onSetAuthRedirectPath();
		}
	}

	inputChangedHandler = (event, controlName) => {
		const updatedControls = updateObject(this.state.controls, {
			[controlName]: updateObject(this.state.controls[controlName], {
				value: event.target.value,
				valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
				touched: true
			})
		});

		this.setState({ controls: updatedControls });
	};

	submitHandler = (event) => {
		event.preventDefault();
		this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
	};

	switchAuthModeHandler = () => {
		this.setState((prevState) => {
			return {
				isSignUp: !prevState.isSignUp
			};
		});
	};

	render() {
		const formElementsArray = [];
		for (let key in this.state.controls) {
			formElementsArray.push({
				id: key,
				config: this.state.controls[key]
			});
		}

		let form = formElementsArray.map((element) => (
			<Input
				key={element.id}
				elementType={element.config.elementType}
				elementConfig={element.config.elementConfig}
				value={element.config.value}
				changed={(event) => this.inputChangedHandler(event, element.id)}
				invalid={!element.config.valid}
				shouldValidate={element.config.validation}
				touched={element.config.touched}
				validationLength={element.config.validation.length}
			/>
		));

		let switchAuth = (
			<p className={classes.SwitchAuth}>
				New to BurgerApp?{' '}
				<button className={classes.SwitchButton} onClick={this.switchAuthModeHandler}>
					Join Now
				</button>{' '}
			</p>
		);
		if (!this.state.isSignUp) {
			switchAuth = (
				<p className={classes.SwitchAuth}>
					Already a member?{' '}
					<button className={classes.SwitchButton} onClick={this.switchAuthModeHandler}>
						Sign In
					</button>{' '}
				</p>
			);
		}

		if (this.props.loading) {
			form = <Spinner />;
		}

		let errorMessage = null;

		if (this.props.error) {
			errorMessage = <p>{this.props.error.message}</p>;
		}

		if (this.props.isAuthenticated) {
			return <Redirect to={this.props.authRedirectPath} />;
		}

		return (
			<Aux>
				<div className={classes.Auth}>
					<h3>{this.state.isSignUp ? 'Welcome Back!' : 'Please Sign Up'}</h3>
					{errorMessage}
					<form onSubmit={this.submitHandler}>
						{form}
						<Button>{this.state.isSignUp ? 'Sign In' : 'Sign Up'}</Button>
					</form>
					{switchAuth}
				</div>
				<div className={classes.Message}>
					<h4>To see the full capabilities of the site please login with the following credentials:</h4>
					<p>Email: test@test.com</p>
					<p>Password: 123456</p>
				</div>
			</Aux>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.auth.loading,
		error: state.auth.error,
		isAuthenticated: state.auth.token !== null,
		buildingBurger: state.burgerBuilder.building,
		authRedirectPath: state.auth.authRedirectPath
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAuth: (email, password, isSignUp) => dispatch(actionCreators.auth(email, password, isSignUp)),
		onSetAuthRedirectPath: () => dispatch(actionCreators.setAuthRedirectPath('/'))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
