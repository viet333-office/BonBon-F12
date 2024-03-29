<<<<<<< HEAD
=======
import * as actionTypes from "../constants"

const INITIAL_STATE = {
    isFetching: null,
    isError: "",
    errorMess: "",
    listImageProductData: [],
    imgObj: null
}

const imageType = imageProduct.imageProductTypes;
export default function listImageProductReducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case imageType.GET_IMAGE_PRODUCT_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case imageType.UPDATE_IMAGE_PRODUCT_REQUEST:
            return {
                ...state,
                isFetching: true,
                imgObj: payload
            }
        case imageType.GET_IMAGE_PRODUCT_SUCCESS:
            return {
                ...state,
                isFetching: true,
                istImageProductData: payload
            }
        case importWareHouse.imageType.GET_IMAGE_PRODUCT_FAILURE:
        case importWareHouse.imageType.UPDATE_IMAGE_PRODUCT_FAILURE:
            return {
                ...state,
                isFetching: false,
                isError: false,
                errorMess: payload.errorMess
            }

        default:
    }

}
>>>>>>> dev
