import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
	orders: [],
	sendingOrder: false,
	purchased: false,
	loading: false,
	error: false
};

const purchaseInit = (state, action) => {
	return updateObject(state, { purchased: false });
};

const purchaseBurgerStart = (state, action) => {
	return updateObject(state, { sendingOrder: true });
};

const purchaseBurgerSuccess = (state, action) => {
	return updateObject(state, {
		orders: state.orders.concat(action.order),
		sendingOrder: false,
		purchased: true,
		loading: true
	});
};

const purchaseBurgerFail = (state, action) => {
	return updateObject(state, {
		error: true,
		sendingOrder: false
	});
};

const fetchOrdersStart = (state, action) => {
	return updateObject(state, { loading: true });
};

const fetchOrdersSuccess = (state, action) => {
	return updateObject(state, {
		orders: action.orders,
		loading: false
	});
};

const fetchOrdersFail = (state, action) => {
	return updateObject(state, {
		error: true,
		loading: false
	});
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.PURCHASE_INIT:
			return purchaseInit(state, action);
		case actionTypes.PURCHASE_BURGER_START:
			return purchaseBurgerStart(state, action);
		case actionTypes.PURCHASE_BURGER_SUCCESS:
			return purchaseBurgerSuccess(state, action);
		case actionTypes.PURCHASE_BURGER_FAIL:
			return purchaseBurgerFail(state, action);
		case actionTypes.FETCH_ORDERS_START:
			return fetchOrdersStart(state, action);
		case actionTypes.FETCH_ORDERS_SUCCESS:
			return fetchOrdersSuccess(state, action);
		case actionTypes.FETCH_ORDERS_FAIL:
			return fetchOrdersFail(state, action);
		default:
			return state;
	}
};

export default reducer;
