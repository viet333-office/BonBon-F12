import { createAction } from "@reduxjs/toolkit"
import listProductTypes from "../constants"
export const listProductAction = {
     listProductRequest : createAction(listProductTypes.GET_LIST_PRODUCT_REQUEST),
     listProductSuccess : createAction(listProductTypes.GET_LIST_PRODUCT_SUCCESS),
     listProductFailure : createAction(listProductTypes.GET_LIST_PRODUCT_FAILURE)
}
