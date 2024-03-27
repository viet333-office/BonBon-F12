import {useDispatch, useSelector } from "react-redux";
export const useProduct=()=>{
    const dispatch = useDispatch();
    const listProductData = useSelector((state) => state.listProductData);

    const notificationData = useSelector((state)=> state.isNotification);

    const isFetching = useSelector((state) => state.isFetching );

    const dispatchGetListProduct =(payload) =>{
        dispatch(listProductRequest(payload))
    }
    const dispatchClearNotification = (payload)=>{
        dispatch(ClearNotificationListProduct(payload))
    }
    return {
        notificationData,
        listProductData,
        listProductSearchData,
        isFetching,
        dispatchClearNotification,
        dispatchGetListProduct
    }
}