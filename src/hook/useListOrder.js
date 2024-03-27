import { useDispatch, useSelector } from "react-redux"
import listOrderAction from '../actions'

export const useListOrder = () => {
    const dispatch = useDispatch();
    const listOrderData = useSelector(state => state.listOrder.listOrderData);
    const dispatchGetListOrder = () => {
        dispatch(listOrderAction.listOrderRequest());
    };
    return { listOrderData, dispatchGetListOrder };
};

const listOrderSearchData = useSelector(state => state.listOrderSearchData).listOrder
const textSearch = useSelector(state => state.textSearch).listOrder

const dispatchSearchListOrder = (payload) => {

    dispatch(action.searchListOrderRequest(payload))

    dispatch(listOrderAction.searchListOrderRequest(payload))
}

return { listOrderSearchData, textSearch, dispatchSearchListOrder }