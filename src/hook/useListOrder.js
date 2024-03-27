import { useSelector } from "react-redux"

const listOrderSearchData = useSelector(state => state.listOrderSearchData).listOrder
const textSearch = useSelector(state => state.textSearch).listOrder

const dispatchSearchListOrder = (payload) => {
    dispatch(action.searchListOrderRequest(payload))
}

return { listOrderSearchData, textSearch, dispatchSearchListOrder }