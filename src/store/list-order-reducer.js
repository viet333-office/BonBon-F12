case SEARCH_LIST_ORDER_REQUEST:
return {
    isFetching: true,
    textSearch: payload
}

case SEARCH_LIST_ORDER_SUCCESS:
    return{
        isFetching: false,
        listOrderSearchData: data.payload
    }

case SEARCH_LIST_ORDER_FAILURE:
    return{
        isFetching: false,
        isError: false,
        errorMess: errorMess.payload
    }
