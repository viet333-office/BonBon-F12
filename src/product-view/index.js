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
export default function ProductScreen(props) {
    const [isNotification, setIsNotification] = useState(false);
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
            <DetailProductModal />
        </>
    )
}