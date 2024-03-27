import createAction from "@reduxjs/toolkit";
import * as authType from "../constants/authType";
import importWareHouse from "../constants";

export const authAction = {
  loginRequest: createAction(authType.LOGIN_REQUEST),
  loginSuccess: createAction(authType.LOGIN_SUCCESS),
  loginFailure: createAction(authType.LOGIN_FAILURE),
};

export const importWareHouseAction = {
  listImportWareHouseRequest: createAction(importWareHouse.GET_IMPORT_WARE_HOUSE_REQUEST),
  listImportWareHouseSuccess: createAction(importWareHouse.GET_IMPORT_WARE_HOUSE_SUCCESS),
  listImportWareHouseFailure: createAction(importWareHouse.GET_IMPORT_WARE_HOUSE_FAILURE)
}