import useLocalStorage from "../hook"
import listImageProductData from "../mockup/index"

function* handleGetListImageProduct() {
    function getData() {
        const getData = useLocalStorage();
        try {
            const listImageProductDataLocal = yield getData(listImageProductData.key);
            yield put( imageProductAction.getListImageProductSuccess({  
                data: listImageProductData 
            }))
        } catch (error) {
            yield put(imageProductAction.getListImageProductFailure({
                errorMess: error.message
            }))
        }
    };
}
 function* handleUpdateListImageProduct(payload){
    const[getData, setData] = useLocalStorage();
    try {
        const listImageProductDataLocal = yield call(getData, { key: listImageProductData });
        yield put( imageProductAction. getListImageProductSuccess({  
            data: listImageProductDataLocal
        }))
        const  newListImageProduct =  listImageProductDataLocal.filter(item);
        yield setData(listImageProductData.key,newListImageProductData.key);
        yield handleGetListImageProduct();
        return ({
         payload: item.id != payload.payload.id
        })
    } catch (error) {
        yield put(imageProductAction.updateListImageProductFailure({
            errorMess: error.message
        }))
    }
}

export default function* importWareHouseSaga() {
    yield takeLatest(imageProductTypes.GET_IMAGE_PRODUCT_REQUEST, handleGetListImageProduct);
    yield takeLatest(imageProductTypes.UPDATE_IMAGE_PRODUCT_REQUEST, handleUpdateListImageProduct);
  }