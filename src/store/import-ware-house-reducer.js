import * as actionTypes from "../constants"

const INITIAL_STATE = {
    listImportWareHouseData: [],
    isFetching: false,
    isError: false,
    errorMess: "",
    isNotification: false,
    listOrderData: [],
    textSearch: "",
    listOrderSearchData: []
}

const importWareHouse = actionTypes.importWareHouse

export default listProductReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case importWareHouse.GET_IMPORT_WARE_HOUSE_REQUEST:
            return {
                isFetching: true
            }
        case importWareHouse.GET_IMPORT_WARE_HOUSE_SUCCESS:
            return {
                isFetching: false,
                listCartData: action.payload
            }
        case importWareHouse.GET_IMPORT_WARE_HOUSE_FAILURE:
            return {
                isFetching: false,
                isError: true,
                errorMess: action.payload.errorMess
            }
        case UPDATE_IMPORT_WARE_HOUSE_REQUEST:
            return {
                isFetching: true,
                textSearch: payload
            }
        case UPDATE_IMPORT_WARE_HOUSE_SUCCESS:
            return {
                isFetching: false,
                isError: false,
                errorMess: null
            }
        case UPDATE_IMPORT_WARE_HOUSE_FAILURE:
            return {
                isFetching: false,
                isError: true,
                errorMess: payload.errorMess
            }
        default:
            return state
    }
}