import { useState } from 'react'
import UpdateOldProductModal from './update-old-product-modal'

const [ isShowModal, setShowModal ] = useState(false)
const [ onData,setOnData ] = useState('')
const [isClear, setClear ] = useState(false)
const closeModal =  () => {
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