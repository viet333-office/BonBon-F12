import wareHouseSaga from "./ware-house-saga"
import all from" redux-saga/effects "
import importWareHouseSaga from "./import-ware-house-saga" 
export function *rootSaga() {
    yield all([
        ...wareHouseSaga
    ])
    yield all([...importWareHouseSaga]);
}