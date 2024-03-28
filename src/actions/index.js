import createAction from "@reduxjs/toolkit";
import * as authType from "../constants/authType";

export const authAction = {
  loginRequest: createAction(authType.LOGIN_REQUEST),
  loginSuccess: createAction(authType.LOGIN_SUCCESS),
  loginFailure: createAction(authType.LOGIN_FAILURE),
};
export const importWareHouseAction = {
  addNewProductImportWareHouseRequest: createAction(importWareHouseTypes.ADD_IMPORT_WARE_HOUSE_REQUEST),
  addNewProductImportWareHouseSuccess: createAction(importWareHouseTypes.ADD_IMPORT_WARE_HOUSE_SUCCESS),
  addNewProductImportWareHouseFailure: createAction(importWareHouseTypes.ADD_IMPORT_WARE_HOUSE_FAILURE)
}