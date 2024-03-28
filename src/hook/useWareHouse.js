import { useDispatch, useSelector } from "react-redux";
import * as wareHouseAction from "../actions";
const useWareHouse = () => {
  const dispatch = useDispatch();
  const listWareHouseData = useSelector(
    (state) => state.wareHouse.listWareHousetData
  );
  const dispatchGetListWareHouse = () => {
    dispatch(wareHouseAction.wareHouseAction.listProductRequest);
  };
  return { listWareHouseData, dispatchGetListWareHouse };
};
export default useWareHouse;
