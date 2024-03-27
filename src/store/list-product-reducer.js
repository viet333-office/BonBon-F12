import * as actionTypes from "../constants/listProductType"
const INITIAL_STATE = {
    isFetching: false,
    isNotification: false,
    isError: "",
    errorMess: "",
    listProductData: [],
    listProductSearchData: []

}
const listProducttype = actionTypes.listProducttypes
export default listProductReducer = (state = INITIAL_STATE, { type: string, payload: object }) => {
    switch (type) {
        case GET_LIST_PRODUCT_REQUEST:
            return {
                isFetching: true,
                textSearch: payload
            }

        case GET_LIST_PRODUCT_SUCCESS:
            return {
                isFetching: false,
                listProductData: payload.data
            }

        case GET_LIST_PRODUCT_FAILURE:
            return {
                isFetching: false,
                isError: false,
                errorMess: payload.errorMess
            }
        case NOTIFICATION_CLEAR:
            return {
                isNotification: false
            }

        default:
            return INITIAL_STATE;
    }
}