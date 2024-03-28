import { put, takeLatest } from 'redux-saga/effects'
import cartAction from '../actions'
import cartTypes from '../constants'
import useLocalStorage from '../hook/index'
import { adminCartData, saleCartData } from '../mockup/index'

const { getData, getItemData, setData } = useLocalStorage();
function* handleGetListCart() {
    const role = yield getItemData("role");
    try {
        if (role === "admin") {
            const listProductAdminCart = yield (getData(adminCartData.key));
            yield put(cartAction.cartSuccess({ data: listProductAdminCart }))
        } else {
            const listProductSaleCart = yield (getData(saleCartData.key));
            yield put(cartAction.CartSuccess({ data: listProductSaleCart }))
        }
    } catch (error) {
        yield put(cartAction.CartFailure({ errorMess: error.message }))
    }
}

const cartSaga = [
    takeLatest(cartTypes.GET_CART_REQUEST, handleGetListCart),
]
export default cartSaga


