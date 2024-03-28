import createAction from "@reduxjs/toolkit";
import authType from "../constants";
import importWareHouse from "../constants";
import wareHouseTypes from "../constants";
import cartTypes from "../constants";
import listProductTypes from "../constants";

export const listOrderAction = {
  listOrderRequest: createAction(listOrderTypes.GET_LIST_ORDER_REQUEST),
  listOrderSuccess: createAction(listOrderTypes.GET_LIST_ORDER_SUCCESS),
  listOrderFailure: createAction(listOrderTypes.GET_LIST_ORDER_FAILURE),
  createOrderRequest: createAction(listOrderTypes.CREATE_ORDER_REQUEST),
  createOrderSuccess: createAction(listOrderTypes.CREATE_ORDER_SUCCESS),
  createOrderFailure: createAction(listOrderTypes.CREATE_ORDER_FAILURE),
};

export const authAction = {
  loginRequest: createAction(authType.LOGIN_REQUEST),
  loginSuccess: createAction(authType.LOGIN_SUCCESS),
  loginFailure: createAction(authType.LOGIN_FAILURE),
};

export const importWareHouseAction = {
  listImportWareHouseRequest: createAction(
    importWareHouse.GET_IMPORT_WARE_HOUSE_REQUEST
  ),
  listImportWareHouseSuccess: createAction(
    importWareHouse.GET_IMPORT_WARE_HOUSE_SUCCESS
  ),
  listImportWareHouseFailure: createAction(
    importWareHouse.GET_IMPORT_WARE_HOUSE_FAILURE
  ),
};

export const searchListOrderRequest = createAction(
  listOrderTypes.SEARCH_LIST_ORDER_REQUEST
);
export const searchListOrderSuccess = createAction(
  listOrderTypes.SEARCH_LIST_ORDER_SUCCESS
);
export const searchListOrderFailure = createAction(
  listOrderTypes.SEARCH_LIST_ORDER_FAILURE
);

export const wareHouseAction = {
  listProductRequest: createAction(wareHouseTypes.GET_LIST_PRODUCT_REQUEST),
  listProductSuccess: createAction(wareHouseTypes.GET_LIST_PRODUCT_SUCCESS),
  listProductFailure: createAction(wareHouseTypes.GET_LIST_PRODUCT_FAILURE),
};
export const updateListImportWareHouseRequest = createAction(
  importWareHouse.UPDATE_IMPORT_WARE_HOUSE_REQUEST
);
export const updateListImportWareHouseSuccess = createAction(
  importWareHouse.UPDATE_IMPORT_WARE_HOUSE_SUCCESS
);
export const updateListImportWareHouseFailure = createAction(
  importWareHouse.UPDATE_IMPORT_WARE_HOUSE_FAILURE
);

export const cartAction = {
  cartRequest: createAction(cartTypes.GET_CART_REQUEST),
  cartSuccess: createAction(cartTypes.GET_CART_SUCCESS),
  cartFailure: createAction(cartTypes.GET_CART_FAILURE),
  createItemProductRequest: createAction(
    listProductTypes.ADD_ITEM_PRODUCT_REQUEST
  ),
  createItemProductSucsses: createAction(
    listProductTypes.ADD_ITEM_PRODUCT_SUCCESS
  ),
  createItemProductFailure: createAction(
    listProductTypes.ADD_ITEM_PRODUCT_FAILURE
  ),
};

export const updateProductPriceRequest = createAction(
  listProductTypes.UPDATE_PRODUCT_PRICE_REQUEST
);
export const updateProductPriceSuccess = createAction(
  listProductTypes.UPDATE_PRODUCT_PRICE_SUCCESS
);
export const updateProductPriceFailure = createAction(
  listProductTypes.UPDATE_PRODUCT_PRICE_FAILURE
);
export const ClearNotificationListProduct = createAction(
  listProductTypes.NOTIFICATION_CLEAR
);
