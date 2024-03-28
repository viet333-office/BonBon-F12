import ConfirmOderCreationModal from "./confirm-order-creation-modal";

const CartScreen = () => {
    const [isValidateDataCart, setIsValidateDataCart] = useState(false);
    const [isOpenModalCreateOrder, setIsOpenModalCreateOrder] = useState(false);
    const [arrCodeProduct, setArrCodeProduct] = useState([]);
    const { dispatchCreateOder } = useListOrder();
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
    
    //Ai viết hàm getDataValidate thì để dòng code này vào trong
    getListCodeProductCart()

    return (
        <SafeAreaView
            style={styles.container}>				XGH-HTML_CV-1
            <Box
                style={styles.boxHeaderBack}>			XGH-HTML_CV-2
                <HeaderBackCommon />		XGH-HTML_CV-3
            </Box>			XGH-HTML_CV-4
            <ToastNotificationCommon />			XGH-HTML_CV-5
            <SwipeList
                updateCartCurrentData={updateCartCurrentData}
                listCartProduct={listCartProduct}
                isValidateDataCart={isValidateDataCart}
            />
            <SearchCustomerModal />			XGH-HTML_CV-7
            <DeleteProductModal />			XGH-HTML_CV-8
            <ConfirmOderCreationModal
                isOpen={isOpenModalCreateOrder}
                onClose={closeCreateOrderModal}
                onConfirm={confirmCreateOrderModal}
            />
            <VStack
                alignItems="center"
                marginBottom={"60%"}>			XGH-HTML_CV-10
                <AntDesign
                    name="warning"
                    size={54}
                    color="#cccc" />		XGH-HTML_CV-11
                <Text
                    marginTop={"5%"}
                    size="md">		XGH-HTML_CV-12
                    Không có sản phẩm nào!
                </Text>
            </VStack>
            <TotalPriceCommon />			XGH-HTML_CV-13
        </SafeAreaView>
    )
}

export default CartScreen