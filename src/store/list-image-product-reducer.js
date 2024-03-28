import * as actionTypes from "../constants";
const INITIAL_STATE = {
    isFetching: false,
    isNotification: false,
    isError: "",
    errorMess: "",
    listProductData: [],
    listProductSearchData: [],
};
const listProductType = actionTypes.listProductType;
export default listProductReducer = (
    state = INITIAL_STATE,
    { type, payload }
) => {
    switch (type) {
        case listProductType.GET_LIST_PRODUCT_REQUEST:
            return {
                ...state,
                isFetching: true,
                textSearch: payload,
            };

        case listProductType.GET_LIST_PRODUCT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                listProductData: payload.data,
            };

        case listProductType.GET_LIST_PRODUCT_FAILURE:
            return {
                ...state,
                isFetching: false,
                isError: false,
                errorMess: payload.errorMess,
            };
        case listProductType.NOTIFICATION_CLEAR:
            return {
                ...state,
                isNotification: false,
            };

        default:
            return INITIAL_STATE;
        case listProductType.ADD_ITEM_PRODUCT_REQUEST:
            return {
                ...state,
                isFetching:false,
            }
        
    }
};
