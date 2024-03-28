import wareHouseSaga from "./ware-house-saga"

function *rootSaga() {
    yield all([
        ...wareHouseSaga
    ])
}