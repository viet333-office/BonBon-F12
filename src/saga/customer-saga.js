import {put, takeLatest} from "redux-saga/effects"
import { customerAction } from "../actions"
import customerTypes from "../constants"
import useLocalStorage from "../hook/index"
import listCustomerData from "../mockup/index"
function handleGetListCustomer() {
    const {getData} = useLocalStorage()
    try {
        const listCustomerDataLocal = yield getData(listCustomerData.key)
        yield put(customerAction.listCustomerSuccess({ data: listCustomerDataLocal }));
    } catch (error) {
        yield put (customerAction.listCustomerFailure({ errorMess: error.message}))
    }
}
function* handleCreateCustomer (data){
    const {getData,setData}= useLocalStorage();
    try {
        const listCustomerDataLocal = yield getData (listCustomerData.key)
        const data = {
            payload: {
              id: listCustomerDataLocal.length + 1
            }
          };
        listCustomerDataLocal.unshift(data.payload);
        yield setData (listCustomerData.key, listCustomerDataLocal)
        yield put(customerAction.addCustomerSuccess())
    } catch (error) {
        
    }
}