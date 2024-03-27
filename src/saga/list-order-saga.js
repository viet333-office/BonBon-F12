import { put, takeLatest } from 'redux-saga/effects'
import { listOrderAction } from '../actions/index'
import listOrderTypes from '../constants'
import useLocalStorage from '../hook/index'
import listOrderData from '../mockup/'
import { dateFormat, removeVietnameseTones, statusOrder } from '../utils'

function* handleGetListOrder() {
    const { getData } = useLocalStorage
    try {
        const listOrderDataLocal = yield getData({ listOrderData });
        yield put(listOrderAction.listOrderSuccess({ data: listOrderDataLocal }));
    } catch (error) {
        yield put(listOrderAction.listOrderFailure({ errorMess: error.message }));
    }
}

const listOrderSaga = []
export default listOrderSaga

function* handleSearchListOrder({ payload }) {
    const { getData } = useLocalStorage()
    const handleCheckString = (inputText) => {
        const formatTextSearch = textSearch.trim().toLowerCase();
        const formatInputText = inputText.trim().toLowerCase();
        const removeVietNameseTextSearch = removeVietnameseTones(formatTextSearch);
        const removeVietNameseInputText = removeVietnameseTones(formatInputText);
        return removeVietNameseInputText.includes(removeVietNameseTextSearch);
    }

    try {
        const listOrderDataLocal = yield getData(payload)
        const flatListCustomer = listOrderDataLocal.map(({ orderCode, fullName }) => ({ orderCode, fullName }))
        let result = [];
        flatListCustomer.forEach(item => {
            if (handleCheckString(item.orderCode) || handleCheckString(item.fullName)) {
                result.push(item);
            }
        })
        if (result) {
            yield put(searchListOrderSuccess({ data: result }));
        } else {
            yield put(searchListOrderSuccess({ data: [] }));
        }
    } catch (error) {
        yield put(searchListOrderFailure({ errorMess: error.message }));
    }
}

takeLatest(listOrderTypes.GET_LIST_ORDER_REQUEST, handleGetListOrder)
takeLatest(listOrderTypes.SEARCH_LIST_ORDER_REQUEST, handleSearchListOrder)




