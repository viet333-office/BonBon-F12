import { put, takeLatest } from 'redux-saga/effects'
import { listOrderAction } from '../actions/index'
import listOrderTypes from '../constants'
import useLocalStorage from '../hook/index'
import listOrderData from '../mockup/'

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

