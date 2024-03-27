import * as actionTypes from "../constants";
const INITIAL_STATE = {
  isFetching: false,
  isError: "",
  errorMess: "",
  isNotification: false,
  listWareHousetData: [],
};

const wareHouseTypes = { ...actionTypes.default.wareHouseTypes };

export default listProductReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case wareHouseTypes.GET_WARE_HOUSE_REQUEST:
      return {
        isFetching: true,
      };
    case wareHouseTypes.GET_WARE_HOUSE_SUCCESS:
      return {
        isFetching: false,
        listWareHousetData: action.payload.data,
      };
    case wareHouseTypes.GET_WARE_HOUSE_FAILURE:
      return {
        isFetching: false,
        errorMess: action.payload.errorMess,
      };

    default:
      return state;
  }
};
