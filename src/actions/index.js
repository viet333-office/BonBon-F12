import createAction from "@reduxjs/toolkit"
export const listOrderAction = {
    listOrderRequest: createAction(GET_LIST_ORDER_REQUEST),
    listOrderSuccess: createAction(GET_LIST_ORDER_SUCCESS),
    listOrderFailure: createAction(GET_LIST_ORDER_FAILURE)
}