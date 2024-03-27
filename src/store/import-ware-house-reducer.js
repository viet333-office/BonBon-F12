case UPDATE_IMPORT_WARE_HOUSE_REQUEST:
    return{
        isFetching: true,
        textSearch: payload
    }

case UPDATE_IMPORT_WARE_HOUSE_SUCCESS:
    return{
        isFetching: false,
        isError: false,
        errorMess: null
    } 

case UPDATE_IMPORT_WARE_HOUSE_FAILURE:
    return{
        isFetching: false,
        isError: true,
        errorMess: payload.errorMess
    }