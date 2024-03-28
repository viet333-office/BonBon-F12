import { cartAction } from '../actions';
import useLocalStorage from '../hook/useLocalStorage'

const { getItemData,getData,setData } = useLocalStorage();
function* handleCreateItemProduct(payload) {
    const itemProduct = payload;
    const handleFindItemProduct = (DataStoreProduct) => {
        const findDataStoreCart = DataStoreProduct.listProduct.find(element =>
            element.floorPrice === itemProduct.floorPrice &&
            element.isSalePrice === itemProduct.isSalePrice &&
            element.salePrice === itemProduct.salePrice &&
            element.codeProduct === itemProduct.codeProduct
        );
        if (!findDataStoreCart) {
            DataStoreProduct.listProduct.push(itemProduct);
        } else {
            const totalQuantity = findDataStoreCart.quantity + itemProduct.quantity;
            findDataStoreCart.quantity = totalQuantity;
        }
    }
    try {
        const role = yield getItemData("role");
        if (role==="admin") {
            const dataStoreAdminCart = yield getData(adminCartData.key);
            if (dataStoreAdminCart.listProduct){
                dataStoreAdminCart.listProduct = [itemProduct];
                yield setData(adminCartData.key, dataStoreAdminCart);
                yield put(cartAction.CartSucces({data:dataStoreSaleCart }))
            }else{
                handleFindItemProduct(dataStoreAdminCart)
                yield setData(adminCartData.key,dataStoreAdminCart);
                yield put(cartAction.CartSucces({data:dataStoreAdminCart}))
            }
        }else{
            const dataStoreSaleCart = yield getData(saleCartDate.key);
            if (!dataStoreSaleCart.listProduct){
                dataStoreSaleCart.listProduct = [itemProduct];
                yield setData(saleCartData.key,dataStoreSaleCart);
                yield put(cartAction.CartSucces({data:dataStoreSaleCart})) //)
            }else{
                handleFindItemProduct(dataStoreSaleCart);
                yield setData(saleCartData.key,dataStoreSaleCart)
                yield put(cartAction.createItemProductSucsses({data:dataStoreSaleCart}))
            }
        }
    } catch (error) {
        yield put(cartAction.createItemProductFailure({errorMess:error.message}))
    }
}

