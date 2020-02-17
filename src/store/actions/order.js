import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseInit = () => {
	return {
		type: actionTypes.PURCHASE_INIT
	};
};
export const purchaseBurgerSuccess = (orderId, orderData) => {
	return {
		type: actionTypes.PURCHASE_BURGER_SUCCESS,
		order: { id: orderId, data: orderData }
	};
};
export const purchaseBurgerFail = (error) => {
	return {
		type: actionTypes.PURCHASE_BURGER_FAIL,
		error: error
	};
};
export const purchaseBurgerStart = () => {
	return {
		type: actionTypes.PURCHASE_BURGER_START
	};
};
export const purchaseBurger = (order, token) => {
	return (dispatch) => {
		dispatch(purchaseBurgerStart());
		axios
			.post('/orders.json?auth=' + token, order)
			.then((response) => {
				dispatch(purchaseBurgerSuccess(response.data.name, response.config.data));
			})
			.catch((error) => {
				dispatch(purchaseBurgerFail(error));
			});
	};
};

export const fetchOrdersStart = () => {
	return {
		type: actionTypes.FETCH_ORDERS_START
	};
};
export const fetchOrdersSuccess = (orders) => {
	return {
		type: actionTypes.FETCH_ORDERS_SUCCESS,
		orders: orders
	};
};
export const fetchOrdersFail = (error) => {
	return {
		type: actionTypes.FETCH_ORDERS_FAIL,
		error: error
	};
};
export const fetchOrders = (token, userId) => {
	return (dispatch) => {
		dispatch(fetchOrdersStart());
		const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
		axios
			.get('/orders.json' + queryParams)
			.then((res) => {
				console.log(res);
				const fetchedOrders = [];
				for (let key in res.data) {
					fetchedOrders.push({
						ingredients: {
							lettuce: res.data[key].ingredients.lettuce,
							bacon: res.data[key].ingredients.bacon,
							cheese: res.data[key].ingredients.cheese,
							meat: res.data[key].ingredients.meat
						},
						id: key,
						price: res.data[key].price
					});
				}
				dispatch(fetchOrdersSuccess(fetchedOrders));
			})
			.catch((err) => {
				dispatch(fetchOrdersFail(err));
			});
	};
};
