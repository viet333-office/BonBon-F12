import { put, takeLatest } from "redux-saga/effects"
import { cartAction, listProductAction } from "../actions/index"
import listProductTypes from "../constants"
import { useLocalStorage } from "../hook"
import { adminCartData, listProductData, saleCartData } from "../mockup/index"
import { removeVietnameseTones } from "../utils"

const { getItemData, getData, setData } = useLocalStorage();

function* handleGetListProduct() {
    try {
        const listProductDataLocal = yield getData(listProductData.key)
        yield put({ type: 'listProductSuccess', data: listProductDataLocal });

    } catch (error) {
        yield put({ type: 'listProductFailure', errorMess: error.message });
    }
}

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
        if (role === "admin") {
            const dataStoreAdminCart = yield getData(adminCartData.key);
            if (dataStoreAdminCart.listProduct) {
                dataStoreAdminCart.listProduct = [itemProduct];
                yield setData(adminCartData.key, dataStoreAdminCart);
                yield put(cartAction.CartSucces({ data: dataStoreSaleCart }))
            } else {
                handleFindItemProduct(dataStoreAdminCart)
                yield setData(adminCartData.key, dataStoreAdminCart);
                yield put(cartAction.CartSucces({ data: dataStoreAdminCart }))
            }
        } else {
            const dataStoreSaleCart = yield getData(saleCartDate.key);
            if (!dataStoreSaleCart.listProduct) {
                dataStoreSaleCart.listProduct = [itemProduct];
                yield setData(saleCartData.key, dataStoreSaleCart);
                yield put(cartAction.CartSucces({ data: dataStoreSaleCart })) //)
            } else {
                handleFindItemProduct(dataStoreSaleCart);
                yield setData(saleCartData.key, dataStoreSaleCart)
                yield put(cartAction.createItemProductSucsses({ data: dataStoreSaleCart }))
            }
        }
    } catch (error) {
        yield put(cartAction.createItemProductFailure({ errorMess: error.message }))
    }
}

function* handleSearchListProduct(payload = textSearch) {
    const { getData } = useLocalStorage();
    const handleCheckString = (inputText) => {
        const formatTextSearch = textSearch.trim().toLowerCase();
        const formatInputText = inputText.trim().toLowerCase();
        const removeVietNameseTextSearch = removeVietnameseTones(formatTextSearch);
        const removeVietNameseInputText = removeVietnameseTones(formatInputText);
        return (includes(removeVietNameseTextSearch, removeVietNameseInputText));
    }
    try {
        const listProductDataLocal = getData(listProductData);
        const result = [];
        listProductDataLocal.forEach((item) => {
            const codeProduct = item.codeProduct;
            const name = item.name;
            if (handleCheckString(codeProduct) || handleCheckString(name)) {
                result.push(listProductDataLocal);
            }
        })
        if (result) {
            yield put(wareHouseAction.searchListWareHouseSuccess({ data: result }));
        } else {
            yield put(wareHouseAction.searchListWareHouseSuccess({ data: [] }))
        }
    } catch (error) {
        yield put(wareHouseAction.searchListWareHouseFailure({ errorMess: error.message }))
    }
}

const listProductSaga = [
const listProductSaga = [
    takeLatest('SEARCH_LIST_PRODUCT_REQUEST', handleGetListProduct),
    takeLatest("ADD_ITEM_PRODUCT_REQUEST", handleCreateItemProduct),
    takeLatest('SEARCH_LIST_PRODUCT_REQUEST', handleSearchListProduct),
];

export default listProductSaga