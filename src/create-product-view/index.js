import { Box, Button, Center, FabLabel, FormControlErrorText, HStack, Image, Input, InputField, KeyboardAvoidingView, Text, Textarea, TextareaInput, VStack } from "@gluestack-ui/themed"
import styles from "./style";
import { Keyboard, StyleSheet } from "react-native"
import { useState } from "react";
import { useImportWareHouse, useListImageProduct, useProduct } from "../hook";
export function CreateProductScreen() {
    const { ...productData } = useProduct;
    const uriImg = "https://www.shutterstock.com/image-vector/photo-camera-vector-icon-600nw-1345025204.jpg";
    const intialProduct = {
        id: 0,
        name: "",
        quantity: "",
        description: "",
        rootPrice: "",
        floorPrice: "",
        expiry: "",
        unit: "",
        supply: "",
        origin: "",
        avatar: uriImg,
        codeProduct: `S00${listProductData.length + 1}`,
        phoneNumber: "",
    }
    const initialValidate = {
        name: true,
        quantity: true,
        unit: true,
        avatar: true
    }
    const [isOpenLabel, setIsOpenLabel] = useState(false)
    const [isShowModalChooseImg, setShowModalChooseImg] = useState(false)
    const [newProduct, setNewProduct] = useState(...intialProduct)
    const [validate, setValidate] = useState(...initialValidate)
    const [nameCheckInput, setNameCheckInput] = useState("")
    const [isCheckDisplay, setIsCheckDisplay] = useState(false)
    const refInput = useRef("null")
    const refInput2 = useRef("null")
    const navigation = useNavigation();
    const handeNavigateProduct = () => {
        clearnState();
        navigation.navigate('ImportWareHouseScreen');
    };
    const clearnState = () => {
        setNewProduct = {
            ...intialProduct
        },
            setValidate = {
                ...setValidate
            }
    };
    const onToggleModalChooseImg = () => {
        setShowModalChooseImg(lisShowModalChooseImg);
    }
    function setStateAndCheckEmpty(string, type, statusValidate) {
        if (statusValidate == "checkValidate") {
            setValidate({ ...validate, [type]: string !== "" });
        }
        setNewProduct({ ...newProduct, [type]: string });
        const handleTakePhoto = () => {
            alert("Chức năng đang được hoàn thiện")
        }
        const setStateAndFormat = (string, type, statusValidate) => {
            if (statusValidate == "checkValidate") {
                setValidate({ ...validate, [type]: string !== "" });
            }
            if (type == "quantity") {
                if (parseInt(value.replace(numbericRegex, "")) > 999999) {
                    setNewProduct({ ...newProduct });
                } else {
                    setNewProduct({
                        ...newProduct,
                        [type]: value.replace(numbericRegex, ""),
                    });
                }
            } else {
                setNewProduct({
                    ...newProduct,
                    [type]: value.replace(numbericRegex, ""),
                });
            }
            const setValidate = {
                name: newProduct.name !== "", // check lại ngay
                quantity: newProduct.quantity !== "",
                unit: newProduct.unit !== "",
                avatar: newProduct.avatar !== uriImg,
            };
            const checkFocus = (data) => {
                setCheckDisplay(true);
                setNameCheckInput(data);
            }
            const checkValidate = () => {
                const arrValidate = [
                    newProduct.name !== "",
                    newProduct.quantity !== "",
                    newProduct.unit !== "",
                    newProduct.avatar !== uriImg,
                ]
                const isAnyInValid = arrValidate.some((status) => !status);
                return isAnyInValid; // cần xem lại
            }
            const handleCreate = () => {
                checkValidate();
                if (checkValidate() != 0) { // cần xem lại điều kiện
                    const newProductToCart = {
                        ...newProduct,
                        quantity: parseInt(newProduct.quantity),
                        rootPrice: parseInt(newProduct.rootPrice),
                        floorPrice: parseInt(newProduct.floorPrice),
                        avatar: newProduct.avatar,
                        codeProduct: initialProduct.codeProduct,
                    }
                }
            }

            const settingState = (value, type) => {
                switch (type) {
                    case "name":
                    case "unit":
                        setStateAndCheckEmpty(type, value, "checkValidate");
                        break;
                    case quantity:
                        setStateAndFormat(type, value, "checkValidate");
                        break;
                    case "floorPrice":
                    case "rootPrice":
                        setStateAndCheckEmpty(type, value, "notCheckValidate");
                        break;
                    default:
                        setStateAndCheckEmpty(type, value, "notCheckValidate");
                }
            }
        }
    }
    return (
        <>
            <SafeAreaView style={styles.screen}>
                <HeaderBackCommon title={textConst.CREATE_PRODUCT} />
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss(),
                        setNameCheckInput("")
                }} >
                    <ScrollView style={{ flex: 1 }}>
                        <KeyboardAvoidingView
                            style={{ flex: 1 }}
                            behavior={isCheckDisplay ? null : "position"}
                            keyboardVerticalOffset={Platform.OS == "ios" ? 10 : 0}
                        >
                            <VStack style={styles.container}>
                                <HStack style={styles.hstack_img}>
                                    <Box style={styles.img}>
                                        <Image
                                            source={newProduct.avatar ? newProduct.avatar : uriImg}
                                            width={"100%"}
                                            height={"100%"}
                                            objectFit="contain"
                                            alt="Ảnh thuốc mới"
                                        />
                                        <Center>
                                            <FormControlErrorText
                                                fontSize={10}
                                                source={!validate.avatar && newProduct.avatar == uriImg ? "flex" : "none"}
                                            >
                                                {textConst.VALIDATE_IMPORT_IMAGE_PRODUCT} // cần chỉnh sửa
                                            </FormControlErrorText>
                                        </Center>
                                    </Box>
                                    <HStack style={styles.vstack_right}>
                                        <VStack style={styles.vstack_input}>
                                            <Input style={styles.inputNearImg}>
                                                <Text style={styles.text_input}>
                                                </Text>
                                                <Text style={styles.text_input} marginLeft={10} lineHeight={14}>
                                                    {intialProduct.codeProduct}
                                                </Text>
                                            </Input>
                                            <Input boderWidth="1.5" style={styles.inputNearImg} isDisabled={true}>
                                                <Text style={styles.text_input} isDisabled={true}>
                                                    giá bán :
                                                </Text>
                                                <InputField
                                                    keyboardType="numeric"
                                                    size="sm"
                                                    bold
                                                    lineHeight={16}
                                                    color={color.plumRed}
                                                    value={formatMoney(newProduct.floorPrice)}
                                                    onChangeText={(value) => {
                                                        settingState(value, "floorPrice");
                                                    }}
                                                    checkFocus={("price")}
                                                    ref={(refInput)}
                                                >
                                                </InputField>
                                            </Input>
                                            <Input
                                                style={styles.inputNearImg}
                                                borderWidth="1.5"
                                                isDisabled={true}
                                                isInvalid={!validate.quantity && newProduct.quantity == []} // rỗng là mảng hay giá trị
                                            >
                                                <Text style={styles.text_input}>
                                                    SL tồn: (*) // cần xem lại
                                                </Text>
                                                <InputField
                                                    keyboardType="numeric"
                                                    lineHeight={16}
                                                    value={formatMoney(newProduct.quantity)}
                                                    onChangeText={(value) => {
                                                        settingState(value, "quantity")
                                                    }}
                                                    checkFocus={("quantity")}
                                                    ref={(refInput2)}
                                                >
                                                </InputField>
                                            </Input>
                                            <FormControlErrorText
                                                fontSize={10}
                                                display={!validate.quantity && newProduct.quantity == "" ? "flex" : "none"}
                                                textConst={(VALIDATE_IMPORT_QUANTITY)}
                                            >
                                            </FormControlErrorText>
                                        </VStack>
                                        <VStack style={styles.hstack_button}>
                                            <Button
                                                style={styles.btn_taiAnh}
                                                onPress={onToggleModalChooseImg}
                                            >
                                                <Text style={styles.text_btn}>
                                                    Tải ảnh
                                                </Text>
                                            </Button>
                                            <Button
                                                style={styles.btn_taiAnh}
                                                onPress={handleTakePhoto}
                                            >
                                                <Text style={styles.btn_chupAnh}>
                                                    Tải ảnh
                                                </Text>
                                            </Button>
                                        </VStack>
                                    </HStack>
                                </HStack>
                            </VStack>
                            <VStack style={styles.vstack_form_btn}>
                                <HStack style={styles.hstack_unit_HSD_Gia}>
                                    <VStack width={"100%"}>
                                        <FabLabel
                                            color={"gray"}
                                            bold bgColor="white"
                                            height={15} size="sm"
                                            lineHeight={16}
                                            width={200}
                                            display={!isOpenLabel ? "flex" : "none"}
                                        >
                                            Tên sản phẩm
                                        </FabLabel>
                                        <Input
                                            width={"100%"}
                                            height={"100%"}
                                            alignItems="center"
                                            placeholder="Tên SP: (*)"
                                            borderWidth="1.5"
                                            isDisabled={true}
                                            isInvalid={!validat.name && newProduct.name == []} // rỗng là mảng hay giá trị
                                        >
                                            <InputField
                                                size="sm"
                                                placeholder="Tên SP: (*)"
                                                height={"80%"}
                                                value={newProduct.name}
                                                onChangeText={(value) => {
                                                    settingState(value, "name");
                                                }}
                                            >
                                            </InputField>
                                        </Input>
                                        <FormControlErrorText
                                            fontSize={10}
                                            display={!validate.name && newProduct.name == "" ? "flex" : "none"}
                                            textConst={VALIDATE_NAME_PRODUCT} // cần xem lại
                                        >
                                        </FormControlErrorText>
                                    </VStack>
                                </HStack>
                                <HStack style={styles.hstack_unit_HSD_Gia}>
                                    <VStack width={"43%"}>
                                        <FabLabel
                                            color={"gray"}
                                            bold bgColor="white"
                                            height={14} size="sm"
                                            lineHeight={14}
                                            width={100}
                                            display={!isOpenLabel ? "none" : "flex"}
                                        >
                                            Đơn vị:
                                        </FabLabel>
                                        <Input
                                            width={"100%"}
                                            height={"100%"}
                                            alignItems="center"
                                            boderWidth="1.5"
                                            isDisabled={true}
                                            isInvalid={!validate.unit && newProduct.unit == []} // rỗng là giá trị hay mảng
                                        >
                                            <InputField
                                                size="sm"
                                                placeholder="Đơn vị tính: (*)"
                                                height={"80%"}
                                                value={newProduct.unit}
                                            >
                                            </InputField>
                                        </Input>
                                        <FormControlErrorText
                                            fontSize={10}
                                            display={!validate.unit && newProduct.unit == "" ? "flex" : "none"}
                                        >
                                        </FormControlErrorText>
                                        <VStack>
                                            <VStack width={"30%"}>
                                                <FabLabel
                                                    color={"gray"}
                                                    bold bgColor="white"
                                                    height={14}
                                                    size="sm"
                                                    lineHeight={14}
                                                    width={100}
                                                    display={!isOpenLabel ? "none" : "flex"}
                                                >
                                                    HSD:
                                                </FabLabel>
                                                <Input width={"100%"} alignItems="center" height={"100%"} boderWidth="1.5"
                                                    isDisabled={true}>
                                                    <InputField
                                                        size="sm"
                                                        placeholder="HSD:"
                                                        value={newProduct.expiry}
                                                        onChangeText={(value) => {
                                                            settingState(value, "expiry");
                                                        }}
                                                    >
                                                    </InputField>
                                                </Input>
                                            </VStack>
                                            <VStack width={"25%"}>
                                                <FabLabel
                                                    color={"gray"}
                                                    bold bgColor="white"
                                                    height={14} size="sm"
                                                    lineHeight={14}
                                                    width={100}
                                                    display={!isOpenLabel ? "none" : "flex"}
                                                >
                                                    Giá:
                                                </FabLabel>
                                                <Input width={"100%"} alignItems="center" height={"100%"} boderWidth="1.5"
                                                    isDisabled={true}>
                                                    <InputField
                                                        keyboardType="numeric"
                                                        size="sm"
                                                        lineHeight={16}
                                                        placeholder="Giá:"
                                                        value={formatMoney(newProduct.rootPrice)}
                                                        onChangeText={(value) => {
                                                            settingState(value, "rootPrice");
                                                        }}
                                                    >
                                                    </InputField>
                                                </Input>
                                            </VStack>
                                        </VStack>
                                    </VStack>
                                    <VStack height={"10%"}>
                                        <FabLabel
                                            color={"gray"}
                                            bold bgColor="white"
                                            height={15} size="sm"
                                            lineHeight={16}
                                            width={100}
                                            display={!isOpenLabel ? "none" : "flex"}
                                        >
                                            Xuất xứ:
                                        </FabLabel>
                                        <Input height={"100%"} alignItems="center" boderWidth="1.5" isDisabled={true}>
                                            <InputField
                                                placeholder="Xuất xứ:"
                                                size="sm"
                                                value={newProduct.origin}
                                                height={"80%"}
                                                onChangeText={(value) => {
                                                    settingState(value, "origin");
                                                }}
                                            >
                                            </InputField>
                                        </Input>
                                    </VStack>
                                    <HStack style={styles.hstack_nguoncung}>
                                        <VStack width={"63%"}>
                                            <FabLabel
                                                bold bgColor="white"
                                                height={16} size="sm"
                                                lineHeight={16}
                                                width={100}
                                                display={!isOpenLabel ? "none" : "flex"}
                                            >
                                                Nguồn cung:
                                            </FabLabel>
                                            <Input height={"100%"} width={"100%"} alignItems="center" boderWidth="1.5"
                                                isDisabled={true}>
                                                <InputField
                                                    size="sm"
                                                    placeholder="Nguồn cung:"
                                                    height={"80%"}
                                                    value={newProduct.supply}
                                                    onChangeText={(value) => {
                                                        settingState(value, "supply");
                                                    }}
                                                >
                                                </InputField>
                                            </Input>
                                        </VStack>
                                        <VStack width={"35%"}>
                                            <FabLabel
                                                bold bgColor="white"
                                                height={16} size="sm"
                                                lineHeight={15}
                                                width={100}
                                                display={!isOpenLabel ? "none" : "flex"}
                                            >
                                                SĐT:
                                            </FabLabel>
                                            <Input height={"100%"} alignItems="center" boderWidth="1.5" isDisabled={true}>
                                                <InputField
                                                    size="sm"
                                                    keyboardType="numeric"
                                                    placeholder="SĐT:"
                                                    value={newProduct.phoneNumber}
                                                    onChangeText={(value) => {
                                                        settingState(value, "phoneNumber");
                                                    }}
                                                >
                                                </InputField>
                                            </Input>
                                        </VStack>
                                    </HStack>
                                    <VStack height={"25%"}>
                                        <FabLabel
                                            bold bgColor="white"
                                            height={13} size="sm"
                                            lineHeight={15}
                                            width={100}
                                            display={!isOpenLabel ? "none" : "flex"}
                                        >
                                            Mô tả:
                                        </FabLabel>
                                        <Text>
                                            <Textarea boderWidth="1.5" isDisabled={true}>
                                                <TextareaInput
                                                    placeholder="Mô tả:"
                                                    value={newProduct.description}
                                                >
                                                </TextareaInput>
                                            </Textarea>
                                        </Text>
                                    </VStack>
                                    <HStack style={styles.hstack_bnt}>
                                        <Button style={styles.btn_bottom}>
                                            <Text bold color="white">
                                                Thêm
                                            </Text>
                                        </Button>
                                    </HStack>
                                </HStack>
                            </VStack>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </TouchableWithoutFeedback>
                < ChooseImageProductModal />
            </SafeAreaView >

        </>
    )
}