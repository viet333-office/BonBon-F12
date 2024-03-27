import { dateFormat, removeVietnameseTones, statusOrder } from '../utils'

function* handleSearchListOrder({payload}){
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

takeLatest(SEARCH_LIST_ORDER_REQUEST, handleSearchListOrder)