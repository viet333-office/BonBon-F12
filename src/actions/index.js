import { createAction } from "@reduxjs/toolkit";
import * as listProductTypes from "../constants/listProductType"
export const listProductAction = {
     listProductRequest:createAction(listProductTypes.GET_LIST_PRODUCT_REQUEST),
     listProductSuccess:createAction(listProductTypes.GET_LIST_PRODUCT_SUCCESS),
     listProductFailure: createAction(listProductTypes.GET_LIST_PRODUCT_FAILURE)
};