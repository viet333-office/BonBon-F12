import configureStore from "@reduxjs/toolkit"
import { createSagaMiddleware } from "redux-saga"
import { rootReducer } from "./src/store/index"
import { rootSaga } from "./src/saga"

const sagaMiddleware = new createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)