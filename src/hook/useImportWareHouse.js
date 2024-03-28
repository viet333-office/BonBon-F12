import { useDispatch, useSelector } from "react-redux";
import { importWareHouseAction } from "../actions/index"

export function useImportWareHouse() {
    const dispatch = useDispatch()
    const listImportWareHouseData = useSelector(state => state.importWareHouse.listImportWareHouseData);
    const dispatchGetListImportWareHouse = () => {
        dispatch(importWareHouseAction.listImportWareHouseRequest())
    }
    return { listImportWareHouseData, dispatchGetListImportWareHouse }
}

const dispatchUpdateListWareHouse = (payload) => {
    dispatch(updateListImportWareHouseRequest(payload));
};

return [listImportWareHouseSearchData, textSearch, dispatchSearchImportListWareHouse, dispatchUpdateListWareHouse];