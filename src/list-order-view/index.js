import { EmptyDataCommon, FlatListOrderCommon, HeaderSearchCommon, LoadingCommon } from '../component'

const ListOrderScreen = (props) => {
    // Các xử lý và logic khác trong hàm

    return (
        <>
            <HeaderSearchCommon />
            <EmptyDataCommon />
            <FlatListOrderCommon />
            <LoadingCommon />
        </>
    );
};

export default ListOrderScreen;