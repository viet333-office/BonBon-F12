import {
  Button,
  ButtonText,
  HStack,
  Image,
  Input,
  InputField,
  Modal,
  ModalBackdrop,
  ModalContent,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import LoadingCommon from "../../component";
import styles from "./styles";
import {
  buttonText,
  color,
  formatMoney,
  numbericRegex,
  textConst,
  timeoutGet,
} from "../../utils";
export const UpdatePriceProductModal = (props) => {
  const { isOpen, closeModal, updatePrice, data } = props;
  const [isValidateInput, setIsValidateInput] = useState(false);
  const [floorPrice, setFloorPrice] = useState();
  const [isLoading, setLoading] = useState(false);
  const onChangeTextInput = (e) => {
    if (e.replace(/\D/g, "").length <= 9) {
      setFloorPrice(e.replace(/\D/g, ""));
    }
  };
  useEffect(() => {
    const isValid = floorPrice === "";

    // Set hàm setIsValidateInput với tham số là isValid
    setIsValidateInput(isValid);
  }, [floorPrice]);
  useEffect(() => {
    if (isOpen) {
      // Set hàm setFloorPrice với tham số là hàm toString của biến state floorPrice của đối tượng data
      setFloorPrice(data.floorPrice.toString());
      // Dùng để thay đổi giá trị thành kiểu dữ liệu string
    }
  }, [data, isOpen]);
  const onPressCancel = () => {};
};
