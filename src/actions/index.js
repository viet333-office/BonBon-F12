import createAction from "@reduxjs/toolkit";
import * as authType from "../constants/authType";

export const authAction = {
  loginRequest: createAction(authType.LOGIN_REQUEST),
  loginSuccess: createAction(authType.LOGIN_SUCCESS),
  loginFailure: createAction(authType.LOGIN_FAILURE),
};
export const searchListOrderRequest = createAction(listOrderTypes.SEARCH_LIST_ORDER_REQUEST);
export const searchListOrderSuccess = createAction(listOrderTypes.SEARCH_LIST_ORDER_SUCCESS);
export const searchListOrderFailure = createAction(listOrderTypes.SEARCH_LIST_ORDER_FAILURE);

export const cartAction = {
  createItemProductRequest: createAction(listProductTypes.ADD_ITEM_PRODUCT_REQUEST),
  createItemProductSucsses:createAction(listProductTypes.ADD_ITEM_PRODUCT_SUCCESS),
  createItemProductFailure: createAction(listProductTypes.ADD_ITEM_PRODUCT_FAILURE)
}