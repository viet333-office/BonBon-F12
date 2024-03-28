import { AntDesign, EvilIcons } from "@expo/vector-icons"
import { FlatList, Input, InputField, InputSlot, Modal, ModalBackdrop, ModalBody, ModalContent, ModalHeader, Pressable } from "@gluestack-ui/themed"
import { CardUserInfoCommon, EmptyDataCommon, ToastNotificationCommon } from "../../component"
import { CreateCustomerModal } from "../create-customer-modal"
import { debounce } from "lodash/debounce"
import { useEffect, useMemo, useRef, useState } from "react"
import { Keyboard, TouchableWithoutFeedback } from "react-native"
import { useCustomer } from "../../hook"
import { color, timeout } from "../../utils"
import { styles } from "./style"
import { current } from "@reduxjs/toolkit"

export const SearchCustomerModal = (props) => {
    const { isShowModal, CloseModal, isClearTextSearch } = props

    const { listCustomer, listCustomerSearchData, dispatchGetListCustomer, dispatchSearchCustomer } = useCustomer()

    const refInput = useRef()

    const [isShowModalCreate, setIsShowModalCreate] = useState(false)
    const [isNotification, setIsNotification] = useState(false)
    const [isEmptyList, setIsEmptyList] = useState(false)
    const [listData, setListData] = useState(listCustomer)
    const [textSearch, setTextSearch] = useState("")
    const [isClearTextSearchFormChild, setClearTextSearchFromChild] = useState(false)

    useEffect(() => {
        dispatchGetListCustomer()
    })

    useEffect(() => {
        if (isClearTextSearch === true || isClearTextSearchFormChild === true) {
            clearTextSearch()
        }
    })

    useMemo((textSearch, listCustomerSearchData, listCustomer) => {
        if (listCustomerSearchData === 0 && textSearch === 0) {
            setIsEmptyList(true)
            return
        }
        setIsEmptyList(false)
        if (listCustomerSearchData && textSearch) {
            setListData(listCustomerSearchData)
        } else if (textSearch) {
            setListData(listCustomer)
        }
    })

    const onOpenModalCreate = () => {
        setIsShowModalCreate(true)
        setClearTextSearchFromChild(false)
    }

    const onCloseModalCreate = () => {
        refInput.current.clear()
        setIsShowModalCreate(false)
    }

    const pushTextSearch = (data) => {
        setTextSearch(data)
        dispatchSearchCustomer(data)
    }

    const onSearch = debounce(pushTextSearch, timeout)

    const onOpenModalToast = () => {
        setIsNotification(true)
        setTimeOut(setIsNotification(false))
    }

    const onClearTextSearchFromModal = (data) => {
        if (data === true) {
            setClearTextSearchFromChild(true)
        }
    }

    const clearTextSearch = () => {
        refInput.current.clear()
        setTextSearch("")
    }

    const oncloseModal = () => {
        refInput.current.clear()
        CloseModal()
    }

    return (
        <>
            <TouchableWithoutFeedback>
                <Modal>
                    <ModalBackdrop />
                    <ModalContent>
                        <ModalHeader>
                            <Input w={"100%"} variant="underlined">
                                <InputSlot>
                                    <EvilIcons name="search" size={30} />
                                </InputSlot>
                                <InputField placeholder="Tìm kiếm..." />
                                <InputSlot style={{ marginRight: 12 }}>
                                    <AntDesign name="close" size={15} color="gray" />
                                </InputSlot>
                                <InputSlot>
                                    <AntDesign name="close" size={25} />
                                </InputSlot>
                            </Input>
                        </ModalHeader>
                    </ModalContent>
                    <ToastNotificationCommon Info="Thêm thành công!!!!!" Description="Đã thêm mới 1 khách hàng" />
                    <CreateCustomerModal />
                </Modal>
            </TouchableWithoutFeedback>
            <EmptyDataCommon title={"Thêm khách hàng mới"} />
            <FlatList>
                <Pressable marginBottom={"4%"}>
                    <CardUserInfoCommon />
                </Pressable>
            </FlatList>
        </>
    )
}