import { statusOrder } from "../utils";

const INITIAL_STATE = {
    isFetching : false,
    isError: "",
    errorMess : "",
    isNotification:false,
    listWareHousetData:[],
    listWareHouseSearchData : [],
    isNotification : false
}
    
        case wareHouseTypes.GET_WARE_HOUSE_REQUEST :
            ...state,
            isFetching:true,
            textSearch: payload
    
        case wareHouseTypes.GET_WARE_HOUSE_SUCCESS :
            ...state,
            isFetching:false,
            listWareHousetData: payload.data
    
        case wareHouseTypes.SEARCH_WARE_HOUSE_SUCCESS :
            ...state,
            isFetching:false,
            listWareHousetData: payload.data
    
        case wareHouseTypes.GET_WARE_HOUSE_FAILURE :
        case wareHouseTypes.SEARCH_WARE_HOUSE_FAILURE  :
           
            ...state,
            isFetching:false,
            errorMess:payload.errorMess
    
        case  listProductTypes.UPDATE_PRODUCT_PRICE_REQUEST  :
            ...state,
            isNotification:true
    
        case  wareHouseTypes.NOTIFICATION_CLEAR :
            ...state,
            isNotification:false
    
        default:
            return INITIAL_STATE;
    