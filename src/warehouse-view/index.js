import CardProductCommon from "../component/card-product-common";
import LoadingCommon from "../component/loading-common";
import HeaderSearchCommon from "../component/header-search-common";
import EmptyDataCommon from "../component/empty-data-common";
import { useState } from "react";
function onGetTextSearch(data) {
   setLoading(true);
   const timeout = setTimeout(() => {
       dispatchSearchListWareHouse(data);
       setLoading(false);
   }, 1000); 
}
const [isEmptyList , setIsEmptyList ] = useState (false);
const [listData  , setListData ] = useState(listWareHouseData);

useMemo=(textSearch,listWareHouseSearchData,listWareHouseData,notificationData)=>{
   if (listWareHouseSearchData.length === 0 && textSearch.length > 0) {
      setIsEmptyList(true);
      return;
   }
   if (notificationData) {
      setIsNotification (true)
      const timeout = setTimeout(() => {
         setIsNotification(false);
         dispatchClearNotificationWareHouse();
     }, 1000 * 1.5);
     setIsEmptyList(false)
   }
   if (listWareHouseSearchData.length > 0 && textSearch.length > 0) {
      setListData (listWareHouseSearchData );
      
   }
   else if (textSearch.length===0)
   setListData (listWareHouseData )
} 