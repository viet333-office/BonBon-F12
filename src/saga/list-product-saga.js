import {put, takeLatest} from "redux-saga/effects"
import {cartAction,listProductAction} from "../actions/index"
import { listProductTypes } from "../constants"
import {useLocalStorage} from "../hook/index"
import {adminCartData,listProductData,saleCartData } from "../mockup/index"
const [getData , setData, getItemData] = useLocalStorage();
const handleGetListProduct=()=>{
    try {
        const listProductDataLocal = yield getData(listProductData.key)
        yield put({ type: 'listProductSuccess', data: listProductDataLocal });
        
    } catch (error) {
        yield put ({type:'listProductFailure',errorMess:error.message});
    }
}
let listProductSagal = [
    takeLatest('SEARCH_LIST_PRODUCT_REQUEST', handleGetListProduct)
];
