import { put, takeLatest } from "redux-saga/effects"
import { customerAction } from "../actions"
import customerTypes from "../constants"
import useLocalStorage from "../hook/index"
import listCustomerData from "../mockup/index"
import removeVietnameseTones from "../utils"
import { result } from "lodash"

function* handleGetListCustomer() {
    const { getData } = useLocalStorage()
    try {
        const listCustomerDataLocal = yield useLocalStorage()
        yield put(customerAction.listCustomerSuccess(
            { data: listCustomerDataLocal }
        ))
    } catch (error) {
        yield put(customerAction.listCustomerFailure(
            { errorMess: error.message }
        ))
    }
}

function* handleSearchListCustomer({ payload }) {
    const { textSearch } = payload
    const { getData } = useLocalStorage()
    const handleCheckString = (inputText) => {
        const formatTextSearch = textSearch.trim().toLowerCase()
        const formatInputText = inputText.trim().toLowerCase()
        const removeVietNameseTextSearch = removeVietnameseTones(formatTextSearch)
        const removeVietNameseInputText = removeVietnameseTones(formatInputText)
        return removeVietNameseInputText.includes(removeVietNameseTextSearch)
    }
    try {
        const listCustomerDataLocal = yield getData(listCustomerData.key)
        result = []
        for (let i = 0; i < listCustomerDataLocal.length; i++) {
            if (handleCheckString(listCustomerDataLocal[i].phoneNumber) || handleCheckString(listCustomerDataLocal[i].fullName)) {
                result.push(listCustomerDataLocal[i])
            }
            if (result) {
                yield put(customerAction.searchlistCustomerSuccess({ data: result }))
            } else {
                yield put(customerAction.searchlistCustomerSuccess({ data: [] }))
            }
        }
    } catch (error) {
        yield put(customerAction.searchListCustomerFailure({ errorMess: error.message }))
    }
}

const customerSaga = [
    takeLatest(customerTypes.GET_CUSTOMER_REQUEST, handleGetListCustomer),
    takeLatest(customerTypes.SEARCH_CUSTOMER_REQUEST, handleSearchListCustomer)
]

export default customerSaga