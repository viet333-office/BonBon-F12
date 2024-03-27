import { useMemo } from "react";

const { listOrderSearchData, textSearch, dispatchSearchListOrder } = useListOrder()

const onGetTextSearch = (data) => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
        dispatchSearchListOrder(data)
    }, timeout);
    const memoizedData = useMemo(() => {
        if (textSearch && listOrderSearchData.length === 0) {
            setIsEmptyList(true);
            return;
        }

        setIsEmptyList(false);

        if (textSearch && listOrderSearchData.length !== 0) {
            setListData(listOrderSearchData);
        } else {
            setListData(listOrderData);
        }
    }, [textSearch, listOrderSearchData, listOrderData]);

    <HeaderSearchCommon onGetTextSearch={onGetTextSearch}/>
}