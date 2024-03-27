import { useEffect, useState, useMemo, Children } from 'react'
import { Dimensions, View } from 'react-native'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import { Box, Button, ButtonIcon, HStack, Image, Input, InputField, Text, VStack, FormControlErrorText } from '@gluestack-ui/themed'
import { color, formatMoney, textConst, formatMoneyStringToNumber } from 'utils'
import styles from '../product-card/style'

export default function ProductCard({ data, index, onUpdateCart, validateData, isValidateDataCart }) {
    const [productUpdate, setProductUpdate] = useState({
        index: 0,
        isSalePrice: true,
        salePrice: 0,
        quantity: 0
    });
    const [sumPrice, setSumPrice] = useState(0);
    const isFocused = useIsFocused();
    useEffect(() => {
        setProductUpdate({
            index: index,
            isSalePrice: data.isSalePrice,
            salePrice: data.salePrice,
            quantity: data.quantity
        });
    }, [isFocused, data]);

    useMemo(() => {
        let newSumPrice;
        if (productUpdate.isSalePrice) {
            newSumPrice = (data.floorPrice + productUpdate.salePrice) * productUpdate.quantity;
        } else {
            newSumPrice = (data.floorPrice - productUpdate.salePrice) * productUpdate.quantity;
        }
        setSumPrice(newSumPrice);
    }, [productUpdate]);

    const [isShowValidateSalePrice, setIsShowValidateSalePrice] = useState(false);
    const [isShowValidateMaxQuantity, setIsShowValidateMaxQuantity] = useState(false);
    const [isShowValidateMinQuantity, setIsShowValidateMinQuantity] = useState(false);

    //Ai làm hàm onChangeInputQuantity nhét các dòng code này vào trong hàm luôn
    setIsShowValidateMaxQuantity(false)
    setIsShowValidateMinQuantity(false)

    //Ai làm hàm onChangeInputSalePrice nhét các dòng code này vào trong hàm luôn
    setIsShowValidateSalePrice(false)

    //Ai làm hàm onPressUpButton nhét các dòng code này vào trong hàm luôn
    setIsShowValidateMaxQuantity(false)
    setIsShowValidateMinQuantity(false)

    //Ai làm hàm onPressDownButton nhét các dòng code này vào trong hàm luôn
    setIsShowValidateMaxQuantity(false)
    setIsShowValidateMinQuantity(false)

    useEffect(() => {
        if (isValidateDataCart) {
            validateData.forEach((item) => {
                if (item.index === data.index) {
                    setIsShowValidateSalePrice(item.isValidateSalePrice);
                    setIsShowValidateMaxQuantity(item.isValidateMaxQuantity);
                    setIsShowValidateMinQuantity(item.isValidateMinQuantity);
                }
            });
        }
    }, [isValidateDataCart, validateData, data]);

    const showValidateSalePrice = useMemo(() => isShowValidateSalePrice && !data.isChange, [isShowValidateSalePrice, data.isChange]);
    const showValidateMaxQuantity = useMemo(() => isShowValidateMaxQuantity && !data.isChange, [isShowValidateMaxQuantity, data.isChange]);
    const showValidateMinQuantity = useMemo(() => isShowValidateMinQuantity && !data.isChange, [isShowValidateMinQuantity, data.isChange]);

    return (
        <HStack
            style={styles.contentCart}
            justifyContent="space - between" >
            XGH-HTML_PC-1
            <View
                style={styles.boxImg} >
                XGH-HTML_PC-2
                <Image
                    style={styles.imgProduct}
                    alt="Ảnh thuốc" />
                XGH-HTML_PC-3
            </View >
            <VStack
                style={styles.inforProduct}
                justifyContent="center" >
                XGH-HTML_PC-4
                <Text
                    size="md"
                    fontWeight="bold"
                    numberOfLines={1} >
                    XGH-HTML_PC-5
                </Text >
                <VStack>
                    XGH-HTML_PC-6
                    <HStack
                        justifyContent="space-between">
                        XGH-HTML_PC-7
                        <VStack>
                            XGH-HTML_PC-8
                            <Text size="sm">
                                XGH-HTML_PC-9
                            </Text>
                            <Text size="xs">
                                XGH-HTML_PC-10
                            </Text>
                        </VStack>
                        <VStack
                            justifyContent="space-between">
                            XGH-HTML_PC-11
                            <Ionicons
                                name="md-close"
                                size={20} />
                            XGH-HTML_PC-12
                        </VStack>
                        <Box style={styles.inpQuantity}>
                            XGH-HTML_PC-13
                            <Input
                                width="75%"
                                h={32}
                                isDisabled={data.isChange}
                                isInvalid={showValidateSalePrice}
                            >
                                <InputField
                                    keyboardType="number-pad"
                                    textAlign="center"
                                    size="" />
                                XGH-HTML_PC-15
                            </Input>
                        </Box >
                        <Button
                            style={styles.btnUpdateQuantity}
                            size="xs" >
                            XGH-HTML_PC-16
                            < ButtonIcon >
                                XGH - HTML_PC - 17
                                <AntDesign
                                    name="caretup"
                                    size={13} />
                                XGH-HTML_PC-18
                            </ButtonIcon >
                        </Button >
                    </HStack >
                    XGH - HTML_PC - 19
                    <HStack
                        justifyContent="space - between"
                        alignItems="center" >
                        XGH-HTML_PC-20
                        <Button
                            style={styles.btnSalePrice}
                            textAlign="center"
                            size="xs" >
                            XGH-HTML_PC-21
                            <FontAwesome
                                size={15} />
                            XGH-HTML_PC-22
                        </Button >
                        <Input
                            style={styles.inpSalePrice} isDisabled={data.isChange} isInvalid={showValidateMaxQuantity || showValidateMinQuantity}>
                            <InputField
                                keyboardType="number - pad"
                                size="sm"
                                lineHeight={17} />
                            XGH-HTML_PC-24
                        </Input >
                        <VStack justifyContent="center">
                            XGH-HTML_PC-25
                            <Text
                                textAlign=" center"
                                size={"sm"}>
                                XGH-HTML_PC-26
                            </Text>
                        </VStack >
                        <Button
                            style={styles.btnUpdateQuantity}
                            size="xs" >
                            XGH-HTML_PC-27
                            < ButtonIcon >
                                XGH - HTML_PC - 28
                                <AntDesign
                                    name="caretdown"
                                    size={13} />
                                XGH-HTML_PC-29
                            </ButtonIcon >
                        </Button >
                    </HStack >
                </VStack >
                <FormControlErrorText
                    fontSize={10} style={{ display: showValidateMaxQuantity ? 'block' : 'none' }} >{textConst.VALIDATE_QUALITY_MAX}
                </FormControlErrorText >
                <FormControlErrorText
                    fontSize={10} style={{ display: showValidateMinQuantity ? 'block' : 'none' }} >{textConst.VALIDATE_QUALITY_MIN}
                </FormControlErrorText >
                <FormControlErrorText
                    fontSize={10} style={{ display: showValidateSalePrice ? 'block' : 'none' }} >{textConst.VALIDATE_EDIT_PRICE}
                </FormControlErrorText >
            </VStack >
        </HStack >
    );
}
