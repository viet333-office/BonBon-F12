import {
  CardProductCommon,
  LoadingCommon,
  HeaderSearchCommon,
} from "../component";
import { useEffect, useMemo, useState } from "react";
import useIsFocused from "@react-navigation/native";
import useWareHouse from "../hook/useWareHouse";
import { timeout, timeoutGet } from "../utils";

const WarehouseScreen = (props) => {
  const isFocused = useIsFocused();
  const [isLoading, setLoading] = useState(false);
  const { listWareHouseData, dispatchGetListWareHouse } = useWareHouse();

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
      <LoadingCommon isOpen={isLoading} />
    </>
  );
};
export default WarehouseScreen;
