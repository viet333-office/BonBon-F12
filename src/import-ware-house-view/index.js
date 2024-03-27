import { useEffect, useMemo, useState } from "react"
import { useIsFocused, useNavigation } from "@react-navigation/native"
import { Feather } from "@expo/vector-icons"
import { Fab, Text } from "@gluestack-ui/themed"
import { CardProductCommon, EmptyDataCommon, HeaderSearchCommon, LoadingCommon, ToastNotificationCommon } from "../component"
import { useImportWareHouse } from "../hook"
import { timeoutGet } from "../utils"

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