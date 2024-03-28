import { useDispatch, useSelector } from "react-redux";

const listWareHouseSearchData = useSelector((state)=>state.wareHouse.listWareHousetData)
const textSearch  = useSelector((state)=>state.wareHouse.listWareHousetData)
function dispatchSearchListWareHouse (payload) {
    dispatch = useDispatch();
    dispatch(wareHouseAction.searchListWareHouseRequest(payload));
}