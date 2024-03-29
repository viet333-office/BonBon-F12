import {
  CardProductCommon,
  LoadingCommon,
  HeaderSearchCommon,
} from "../component";
import { useEffect, useMemo, useState } from "react";
import useIsFocused from "@react-navigation/native";
import useWareHouse from "../hook/useWareHouse";
import { timeout, timeoutGet } from "../utils";
import UpdatePriceProductModal from "./update-price-product-modal";

const WarehouseScreen = (props) => {
  const isFocused = useIsFocused();
  const [isLoading, setLoading] = useState(false);
  const {
    listWareHouseData,
    listWareHouseSearchData,
    textSearch,
    notificationData,
    dispatchSearchListWareHouse,
    dispatchGetListWareHouse,
    dispatchClearNotificationWareHouse,
    dispatchUpdateProductPrice,
  } = useWareHouse();
  const [isUpdatePriceModal, setIsUpdatePriceModal] = useState(false);
  const [productSelected, setProductSelected] = useState({});
  const [isNotification, setIsNotification] = useState(notificationData);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      dispatchGetListWareHouse();
      setLoading(false);
    }, timeoutGet);
  }, [isFocused]);
  return (
    <>
      <HeaderSearchCommon {...props} />
      <CardProductCommon data={listWareHouseData} {...props} />
      <EmptyDataCommon />
      <LoadingCommon isOpen={isLoading} />
    </>
  );
};
export default WarehouseScreen;
