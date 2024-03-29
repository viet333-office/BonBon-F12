import { put, takeLatest } from "redux-saga/effects";
import { wareHouseAction, listProductAction } from "../actions";
import { wareHouseTypes, listProductTypes } from "../constants";
import useLocalStorage from "../hook/useLocalStorage";
import { listProductData } from "../mockup";

function* handleGetListWareHouse() {
  const { getData } = useLocalStorage();
  try {
    const listProductDataLocal = yield getData("listProductData");
    yield put(
      wareHouseAction.listWareHouseSuccess({ data: listProductDataLocal })
    );
  } catch (error) {
    yield put(
      wareHouseAction.listWareHouseFailure({ errorMess: error.message })
    );
  }
}
const wareHouseSaga = [
  takeLatest(wareHouseTypes.GET_WARE_HOUSE_REQUEST, handleGetListWareHouse),
];

export default wareHouseSaga;
