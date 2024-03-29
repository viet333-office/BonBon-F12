import { useEffect, useMemo, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Box, Fab, FabLabel, Text } from "@gluestack-ui/themed";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import CardProductCommon from "../component/card-product-common/index";
import EmptyDataCommon from "../component/empty-data-common/index";
import LoadingCommon from "../component/loading-common/index";
import ToastNotificationCommon from "../component/toast-notification-common/index";
import styles from "./style";
import { useCart, useListOrder, useProduct } from "../hook";
import DetailProductModal from "./detail-product-modal"
import HeaderSearchCommon from "../component/header-search-common"
import { constant } from "lodash";
export default function ProductScreen(props) {
    const [isNotification, setIsNotification] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [product, setProduct] = useState({
        id: 0,
        name: '',
        quantity: 0,
        description: '',
        rootPrice: 0,
        floorPrice: 0,
        expiry: '',
        updateAt: '',
        unit: '',
        supply: '',
        origin: '',
        avatar: '',
        codeProduct: '',
        phoneNumber: ''
    });

    const onCloseModal = () => {
        setIsOpenModal(false);
    }
    const { dispatchSearchListProduct } = useProduct();
    function onGetTextSearch(data) {
        setLoading(true);
        setTimeout(() => {
            dispatchSearchListProduct(data),
            setLoading(false)
        }, constant.timeout)
    }
    return (

        <>
            {isNotification === false ? null : <ToastNotificationCommon />}
            {isEmptyList === false ? <EmptyDataCommon /> : <CardProductCommon />}
            <HeaderSearchCommon />
            <ToastNotificationCommon />
            <EmptyDataCommon />
            <CardProductCommon />
            <LoadingCommon />
            <Fab size="lg" placement="bottom right" right={25} bottom={30}
                backgroundColor={"#0E6F64"} >
                <Feather name="shopping-cart" size={24} color="#fff" marginRight={5} />
                <FabLabel>Giỏ hàng</FabLabel>
                <Box style={styles.cartIcon}>
                    <Text color="#fff"></Text>
                </Box>
            </Fab>
            <DetailProductModal isOpen={isOpenModal} product={product} closeModal={onCloseModal} />
        </>
    )
}