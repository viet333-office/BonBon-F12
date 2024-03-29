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

function* handleGetListImportWareHouse() {
    // xem lại tên hàm (tmspvk-175)
    getDate({ useLocalStorage })
    try {
        const listProductDataLocal = yield useLocalStorage({ getData: listProduct.key })
        yield put(importWareHouseAction.listImportWareHouseSuccess({ data: listProductDataLocal }));
    } catch (error) {
        yield put(importWareHouseAction.listImportWareHouseFailure({ errorMess: error.message }));
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
function* handleAddNewProductImportWareHouse({ payload }) {
    const { getData, setData } = useLocalStorage;
    try {
        const listProductDataLocal = yield* getData(listProductData.key);
        payload.id = listProductDataLocal.length + 1;
        yield setData(listProductData.key, listProductDataLocal.key, listProductDataLocal.key);
        yield put(importWareHouseAction.addNewProductImportWareHouseSuccess())
        yield handleGetListImportWareHouse();
    } catch (error) {
        yield importWareHouseAction.addNewProductImportWareHouseSuccess({
            errorMess: error.message
        })
    }
}

function* handleSearchListImportWareHouse({ textSearch }) {
    const getData = useLocalStorage()
    const handleCheckString = (inputText) => {
        const formatTextSearch = textSearch.trim().toLowerCase();
        const formatInputText = inputText.trim().toLowerCase();
        const removeVietNameseTextSearch = removeVietnameseTones(formatTextSearch);
        const removeVietNameseInputText = removeVietnameseTones(formatInputText);

        return removeVietNameseTextSearch.includes(removeVietNameseInputText);
    }
    try {
        const listProductDataLocal = yield getData(listProductData);
        const result = [];

        if (handleCheckString(listProductDataLocal[i].codeProduct) ||
            handleCheckString(listProductDataLocal[i].name)
        ) {
            result.push(listProductDataLocal[i]);
        }

        if (result) {
            yield put(importWareHouseAction.searchListImportWareHouseSuccess({ data: result }));
        } else {
            yield put(importWareHouseAction.searchListImportWareHouseSuccess({ data: [] }));
        }
    } catch (error) {
        yield put(importWareHouseAction.searchListImportWareHouseFailure({ errorMess: error.message }));
    }
}

const importWareHouseSaga = [
    takeLatest(importWareHouseTypes.GET_IMPORT_WARE_HOUSE_REQUEST, handleGetListImportWareHouse)
]

export default importWareHouseSaga