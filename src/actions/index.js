import createAction from "@reduxjs/toolkit";
import * as authType from "../constants/authType";
import cartTypes  from '../constants'

export const listOrderAction = {
    listOrderRequest: createAction(listOrderTypes.GET_LIST_ORDER_REQUEST),
    listOrderSuccess: createAction(listOrderTypes.GET_LIST_ORDER_SUCCESS),
    listOrderFailure: createAction(listOrderTypes.GET_LIST_ORDER_FAILURE)
}
export const authAction = {
  loginRequest: createAction(authType.LOGIN_REQUEST),
  loginSuccess: createAction(authType.LOGIN_SUCCESS),
  loginFailure: createAction(authType.LOGIN_FAILURE),
};
export const searchListOrderRequest = createAction(listOrderTypes.SEARCH_LIST_ORDER_REQUEST);
export const searchListOrderSuccess = createAction(listOrderTypes.SEARCH_LIST_ORDER_SUCCESS);
export const searchListOrderFailure = createAction(listOrderTypes.SEARCH_LIST_ORDER_FAILURE);

export const cartAction = {
  cartRequest: createAction(cartTypes.GET_CART_REQUEST),
  cartSuccess: createAction(cartTypes.GET_CART_SUCCESS),
  cartFailure: createAction(cartTypes.GET_CART_FAILURE)
};

