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
import ConfirmOderCreationModal from "./confirm-order-creation-modal";
import DeleteProductModal from './delete-product-modal'

let listCartProduct = []

const CartScreen = () => {
    const navigate = useNavigation();
    const { listCartData, dispatchGetListCart } = useCart();
    const { listProductData } = useProduct();
    const [listLocalProduct, setListLocalProduct] = useState([]);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);
    const [cartCustomer, setCartCustomer] = useState({});
    const [isValidateDataCart, setIsValidateDataCart] = useState(false);
    const [isOpenModalCreateOrder, setIsOpenModalCreateOrder] = useState(false);
    const [arrCodeProduct, setArrCodeProduct] = useState([]);
    const { dispatchCreateOder } = useListOrder();
    const { dispatchUpdateCart } = useCart()

    const onBack = () => {
        navigate("ProductScreen");
        const dataToStore = mergeDataProductChange();
        dispatchUpdateCart({
            id: listCartData.id,
            customer: cartCustomer,
            listProduct: dataToStore,
        });

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

    const matchTotalPrice = () => {
        if (listCartProduct.length > 0) {
            const totalPrice = calculateTotalPrice(listCartProduct) + shipPrice;
            setCartTotalPrice(totalPrice);
        } else {
            setCartTotalPrice(0);
        }
    };

    const getDataValidate = () => {
        const updatedListCartProduct = listLocalProduct.map((item, index) => {
            const foundProduct = listProductData.find(product => product.codeProduct === item.codeProduct);
            if (foundProduct) {
                return {
                    index,
                    ...item,
                    quantity: foundProduct.quantity,
                    currentQuantity: item.quantity,
                    isValidateMaxQuantity: false,
                    isValidateMinQuantity: false,
                    isValidateSalePrice: false
                };
            }
        });
        getListCodeProductCart()
        setListCartProduct(updatedListCartProduct);
        matchTotalPrice();
    };

    const mergeDataProductChange = () => {
        const clonedProductData = cloneDeep(listLocalProduct);

        for (let i = 0; i < clonedProductData.length; i++) {
            for (let j = 0; j < listCartProduct.length; j++) {
                if (clonedProductData[i].codeProduct === listCartProduct[j].codeProduct) {
                    clonedProductData[i].isSalePrice = listCartProduct[j].isSalePrice;
                    clonedProductData[i].quantity = listCartProduct[j].currentQuantity;
                    clonedProductData[i].salePrice = listCartProduct[j].salePrice;
                    break;
                }
            }
        }

        return clonedProductData;
    };


    const getListCodeProductCart = () => {
        const arrCode = listCartProduct.map(item => item.codeProduct);
        const removeDuplicateCode = Array.from(new Set(arrCode));
        setArrCodeProduct(removeDuplicateCode);
    }

    const updateDataValidate = (data) => {
        setIsValidateDataCart(false);
        listCartProduct.forEach((item, index) => {
            if (index === data.index) {
                item.currentQuantity = data.quantity;
                item.salePrice = data.salePrice;
            }
        });
    }

    useEffect(() => {
        getDataValidate();
    }, [listLocalProduct, listCartData]);

    const updateCartCurrentData = (data) => {
        listCartProduct[data.index].isSalePrice = data.isSalePrice;
        listCartProduct[data.index].salePrice = data.salePrice;
        listCartProduct[data.index].currentQuantity = data.quantity;
        updateDataValidate(data);
        setListCartProduct([...listCartProduct]);
        matchTotalPrice();
    }

    const checkValidateQuantity = () => {
        let arrCheckQuantity = [];
        arrCodeProduct.forEach(code => {
            let totalQuantity = listCartProduct.reduce((total, item) => {
                if (item.codeProduct === code) {
                    return total + item.quantity;
                }
                return total;
            }, 0);
            listCartProduct.forEach(product => {
                if (product.codeProduct === code) {
                    product.isValidateMinQuantity = (product.currentQuantity === 0);
                    product.isValidateMaxQuantity = (totalQuantity > product.quantity || product.currentQuantity === 0);
                    if (totalQuantity > product.quantity || product.currentQuantity === 0) {
                        arrCheckQuantity.push(product);
                    }
                }
            });
        });
        return arrCheckQuantity;
    }

    const checkValidateSalePrice = () => {
        let arrCheckSalePrice = [];

        listCartProduct.forEach(product => {
            if (!product.isChange) {
                product.isValidateSalePrice = (product.salePrice > 1.1 * product.floorPrice);
                if (product.isValidateSalePrice) {
                    arrCheckSalePrice.push(product);
                }
            }
        });
        return arrCheckSalePrice;
    }

    const onPressCreateOrder = () => {
        const arrCheckSalePrice = checkValidateSalePrice();
        const arrCheckQuantity = checkValidateQuantity();
        if (arrCheckSalePrice.length > 0 || arrCheckQuantity.length > 0) {
            setIsValidateDataCart(true);
        } else {
            setIsOpenModalCreateOrder(true);
        }
    }

    const confirmCreateOrderModal = () => {
        dispatchCreateOder({
            customer: cartCustomer,
            cartTotalPrice: cartTotalPrice,
            listProduct: listCartProduct
        });
        setTimeout(() => {
            navigateToProductScreen();
        }, timeoutGet);
        closeCreateOderModal();
    }

    const closeCreateOderModal = () => {
        setIsOpenModalCreateOrder(false)
    }
    return (
        <SafeAreaView style={styles.container}>
            <Box style={styles.boxHeaderBack}>
                <HeaderBackCommon
                    isDeleteAll={isEmpty(listCartProduct)}
                    onDeleteAll={onOpenDeleteAllModal}
                    onBack={onBack}
                />
            </Box>
            XGH-HTML_CV-4
            <ToastNotificationCommon />
            XGH-HTML_CV-5
            <SwipeList
                listProductSwipe={listProductSwipe}
                updateCartCurrentData={updateCartCurrentData}
                onOpenDeleteProductModal={onOpenDeleteProductModal}
                listCartProduct={listCartProduct}
                isValidateDataCart={isValidateDataCart}
            />
            <SearchCustomerModal />
            XGH-HTML_CV-7
            <DeleteProductModal />
            XGH-HTML_CV-8
            <ConfirmOderCreationModal
                isOpen={isOpenModalCreateOrder}
                onClose={closeCreateOrderModal}
                onConfirm={confirmCreateOrderModal} />
            <VStack alignItems="center" marginBottom={"60%"}>
                {listProductSwipe.length === 0 ? (
                    <>
                        <AntDesign name="warning" size={54} color="#cccc" />
                        <Text marginTop={"5%"} size="md">
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
                isDisableCreateCart={isEmpty(listCartProduct) || isEmpty(cartCustomer)}
            />
        </SafeAreaView>
    )
}
export default CartScreen    