import { put, takeLatest } from "redux-saga/effects"
import { importWareHouseAction } from "../actions/index"
import * as importWareHouseTypes from "../constants/importWareHouseTypes"
import useLocalStorage from "../hook/useLocalStorage"
import { listProduct } from "../mockup/list-product"

function* handleGetListImportWareHouse() {
    useLocalStorage({ getData })
    try {
        const listProductDataLocal = yield useLocalStorage({ getData: listProduct.key })
        yield put({
            importWareHouseAction: importWareHouseAction.listImportWareHouseSuccess(listProductDataLocal)
        })
    } catch (error) {
        yield put({
            importWareHouseAction: importWareHouseAction.listImportWareHouseFailure(error.message)
        })
    }
}

function* handleUpdateListImportWareHouse({ data }) {
    const { getdata, setdata } = useLocalStorage()
    try {
        const listProductLocal = yield getdata(listProductData.key)
        const findItemProductLocal = listProductLocal.find(item => item.id === data.payload.id, quantity += data.payload.quantity)
        yield put({
            type: UPDATE_IMPORT_WARE_HOUSE_SUCCESS
        })
        yield handleGetListImportWareHouse();
    } catch (error) {
        yield put({
            type: UPDATE_IMPORT_WARE_HOUSE_FAILURE,
            errorMess: error.message
        })
    }
}

const importWareHouseSaga = [
    takeLatest(importWareHouseTypes.GET_IMPORT_WARE_HOUSE_REQUEST, handleGetListImportWareHouse)
]

export default importWareHouseSaga