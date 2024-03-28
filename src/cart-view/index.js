import { useEffect, useState, useMemo } from 'react'
import { SafeAreaView } from 'react-native'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import { Box, Text, VStack } from '@gluestack-ui/themed'
import { color, formatMoney, textConst } from '../utils'
import styles from '../cart-view/style'
import { isEmpty, cloneDeep } from 'lodash'
import { HeaderBackCommon, TotalPriceCommon, ToastNotificationCommon } from '../component'
import SwipeList from './swipe-list'
import { useCart, useListOrder, useProduct } from '../hook'
import shipPrice from '../utils'

let listCartProduct = []
function CartScreen() {
    const navigate = useNavigation();
    const { listCartData, dispatchGetListCart } = useCart();
    const { listProductData } = useProduct();
    const [listLocalProduct, setListLocalProduct] = useState([]);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);
    const [cartCustomer, setCartCustomer] = useState({});

    const onBack = () => {
        navigate("ProductScreen")
    };
    useEffect(() => {
        if (listCartData.listProduct) {
            setListLocalProduct(listCartData.listProduct)
        }
    }, [listCartData]);

    const listProductSwipe = useMemo(() => {
        listLocalProduct.map((item, index) => {
            return {
                ...item,
                key: index + 1
            };
        });
    }, [listLocalProduct]);

    return (
        <SafeAreaView
            style={styles.container}>
            XGH-HTML_CV-1
            <Box
                style={styles.boxHeaderBack}>
                XGH-HTML_CV-2
                <HeaderBackCommon
                    isDeleteAll={isEmpty(listCartProduct)}
                    onDeleteAll={onOpenDeleteAllModal}
                    onBack={onBack} />
            </Box>
            XGH-HTML_CV-4
            <ToastNotificationCommon />
            XGH-HTML_CV-5
            <SwipeList
                listProductSwipe={listProductSwipe}
                updateCartCurrentData={updateCartCurrentData}
                onOpenDeleteProductModal={onOpenDeleteProductModal} />
            <SearchCustomerModal />
            XGH-HTML_CV-7
            <DeleteProductModal />
            XGH-HTML_CV-8
            <ConfirmOderCreationModal />
            XGH-HTML_CV-9
            <VStack
                alignItems="center"
                marginBottom={"60%"}>
                {listProductSwipe.length === 0 ? (
                    <>
                        XGH-HTML_CV-10
                        <AntDesign
                            name="warning"
                            size={54}
                            color="#cccc" />
                        XGH-HTML_CV-11
                        <Text
                            marginTop={"5%"}
                            size="md">
                            XGH-HTML_CV-12
                            Không có sản phẩm nào!
                        </Text>
                    </>
                ) : (
                    <></>
                )}
            </VStack>
            <TotalPriceCommon
                customer={cartCustomer}
                isButton={true}
                totalPrice={cartTotalPrice}
                isDisableCreateCart={isEmpty(listCartProduct) || isEmpty(cartCustomer)} />
        </SafeAreaView>
    )
}