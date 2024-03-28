import { useEffect, useMemo, useState } from "react"
import { useIsFocused, useNavigation } from "@react-navigation/native"
import { Feather } from "@expo/vector-icons"
import { Fab, Text } from "@gluestack-ui/themed"
import { CardProductCommon, EmptyDataCommon, HeaderSearchCommon, LoadingCommon, ToastNotificationCommon } from "../component"
import { useImportWareHouse } from "../hook"
import { timeoutGet } from "../utils"
import UpdateOldProductModal from './update-old-product-modal'

function ImportWarehouseScreen(props) {
    const navigation = useNavigation()
    const isFocused = useIsFocused()

    const { listImportWareHouseData, dispatchGetListImportWareHouse } = useImportWareHouse()

    const [listData, setListData] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [isEmptyList, setIsEmptyList] = useState(false)

    const handleNavigateCart = () => {
        navigation.navigate("CreateProduct")
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(async () => {
            await dispatchGetListImportWareHouse()
            setLoading(false)
        })
    }, [isFocused])

    useMemo(() => {
        if (listWareHouseSearchData.length === 0) {
            setIsEmptyList(true)
        }
        return;
    }, [listWareHouseData])

    return (
        <>
            <HeaderSearchCommon />
            <ToastNotificationCommon Info="Thành công !!!" />
            <EmptyDataCommon />
            <CardProductCommon />
            <UpdateOldProductModal />
            <LoadingCommon />
            <Fab
                size="lg"
                placement="bottom right"
                right={25}
                bottom={30}
                backgroundColor={"#0E6F64"}>
                <Feather
                    name="plus"
                    size={24}
                    color="#fff"
                />
                <Text color="#fff"></Text>
            </Fab>
            isEmptyList ? (
            <EmptyDataCommon />
            ) : (
            <CardProductCommon data={listData} />
            )
        </>
    )
}

const [isShowModal, setShowModal] = useState(false)
const [onData, setOnData] = useState('')
const [isClear, setClear] = useState(false)
const closeModal = () => {
    setShowModal(false)
    setClear(true)
}
const onOpenModalNoti = () => {
    setShowModal(true)
    setTimeout(setShowModal(false), 1500)
}

<Text color="#fff" onOpenModalNoti={onOpenModalNoti}
    isShowModal={isShowModal}
    closeModal={closeModal}
    onData={onData}
    isClear={isClear}></Text>