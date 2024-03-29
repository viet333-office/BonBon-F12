import { put, takeLatest } from "redux-saga/effects";
import { wareHouseAction, listOrderAction } from "../actions";
import wareHouseTypes from "../constants";
import useLocalStorage from "../hook/useLocalStorage";
import listProductData from "../mockup/list-product";
import adminCartData from "../mockup/admin-cart";
import saleCartData from "../mockup/sale-cart";
import listProductTypes from "../constants";
import { isEmpty } from "lodash";

function* handleGetListWareHouse() {
  const { getData } = useLocalStorage();
  try {
    const listProductDataLocal = yield getData(listProductData);
    yield put(
      wareHouseAction.listWareHouseSuccess({ data: listProductDataLocal })
    );
  } catch (error) {
    yield put(
      wareHouseAction.listWareHouseFailure({ errorMess: error.message })
    );
  }
}
function* handleUpdateProductPrice({ payload }) {
  const { getData, setData } = useLocalStorage();
  try {
    const listProductDataLocal = yield getData(listProductData);
    const adminCartDataLocal = yield getData(adminCartData);
    const saleCartDataLocal = yield getData(saleCartData);
    if (!isEmpty(adminCartDataLocal)) {
      adminCartDataLocal.listProduct.map((item, index) => {
        if (item.codeProduct === payload.codeProduct) {
          adminCartDataLocal.listProduct[index].isChange = true;
        }
      });
    }
    if (!isEmpty(saleCartDataLocal)) {
      saleCartDataLocal.listProduct.map((item, index) => {
        if (item.codeProduct === payload.codeProduct) {
          saleCartDataLocal.listProduct[index].isChange = true;
        }
      });
    }
    if (!isEmpty(listProductDataLocal)) {
      listProductDataLocal.listProduct.map((item, index) => {
        if (item.codeProduct === payload.codeProduct) {
          listProductDataLocal[index].isChange = payload.floorPrice;
        }
      });
    }
    yield setData("listProductData", listProductDataLocal);
    yield setData("adminCartData", adminCartDataLocal);
    yield setData("saleCartData", saleCartDataLocal);
  } catch (error) {
    yield put({
      type: listProductTypes.listProductTypes.UPDATE_PRODUCT_PRICE_FAILURE,
      payload: { errorMess: error.message },
    });
  }
}
const wareHouseSaga = [
  takeLatest(wareHouseTypes.GET_WARE_HOUSE_REQUEST, handleGetListWareHouse),
  takeLatest(
    wareHouseTypes.listProductTypes.UPDATE_PRODUCT_PRICE_REQUEST,
    handleUpdateProductPrice
  ),
];

export default wareHouseSaga;
