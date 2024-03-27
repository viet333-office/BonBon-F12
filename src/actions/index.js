import createAction from "@reduxjs/toolkit";
import * as authType from "../constants/authType";
import importWareHouse from "../constants";
import customerTypes from "../constants"

export const customerAction = {
  getCustomerRequest: createAction(customerTypes.GET_CUSTOMER_REQUEST),
  getCustomerSuccess: createAction(customerTypes.GET_CUSTOMER_SUCCESS),
  getCustomerFailure: createAction(customerTypes.GET_CUSTOMER_FAILURE),
  searchListCustomerRequest: createAction(customerTypes.SEARCH_CUSTOMER_REQUEST),
  searchlistCustomerSuccess: createAction(customerTypes.SEARCH_CUSTOMER_SUCCESS),
  searchListCustomerFailure: createAction(customerTypes.SEARCH_CUSTOMER_FAILURE)
}

export const listOrderAction = {
    listOrderRequest: createAction(GET_LIST_ORDER_REQUEST),
    listOrderSuccess: createAction(GET_LIST_ORDER_SUCCESS),
    listOrderFailure: createAction(GET_LIST_ORDER_FAILURE)
}
export const authAction = {
  loginRequest: createAction(authType.LOGIN_REQUEST),
  loginSuccess: createAction(authType.LOGIN_SUCCESS),
  loginFailure: createAction(authType.LOGIN_FAILURE),
};

export const importWareHouseAction = {
  listImportWareHouseRequest: createAction(importWareHouse.GET_IMPORT_WARE_HOUSE_REQUEST),
  listImportWareHouseSuccess: createAction(importWareHouse.GET_IMPORT_WARE_HOUSE_SUCCESS),
  listImportWareHouseFailure: createAction(importWareHouse.GET_IMPORT_WARE_HOUSE_FAILURE)
}

export const searchListOrderRequest = createAction(listOrderTypes.SEARCH_LIST_ORDER_REQUEST);
export const searchListOrderSuccess = createAction(listOrderTypes.SEARCH_LIST_ORDER_SUCCESS);
export const searchListOrderFailure = createAction(listOrderTypes.SEARCH_LIST_ORDER_FAILURE);

export const updateListImportWareHouseRequest = createAction(importWareHouseTypes.UPDATE_IMPORT_WARE_HOUSE_REQUEST);
export const updateListImportWareHouseSuccess = createAction(importWareHouseTypes.UPDATE_IMPORT_WARE_HOUSE_SUCCESS);
export const updateListImportWareHouseFailure = createAction(importWareHouseTypes.UPDATE_IMPORT_WARE_HOUSE_FAILURE);