import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {
	checkoutCancelledHandler = () => {
		this.props.history.goBack();
	};

	checkoutContinueHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	};

	render() {
		let summary = <Redirect to="/" />;
		if (this.props.ingredients) {
			const purchaseRedirect = this.props.purchased ? <Redirect to="/orders" /> : null;
			summary = (
				<div>
					{purchaseRedirect}
					<CheckoutSummary
						ingredients={this.props.ingredients}
						checkoutCancelled={this.checkoutCancelledHandler}
						checkoutContinue={this.checkoutContinueHandler}
					/>
					<Route path={this.props.match.path + '/contact-data'} component={ContactData} />
				</div>
			);
		}
		return summary;
	}
}

const mapStateToProps = (state) => {
	return {
		ingredients: state.burgerBuilder.ingredients,
		purchased: state.order.purchased
	};
};

export default connect(mapStateToProps)(Checkout);
