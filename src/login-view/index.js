import { EvilIcons, Ionicons } from "@expo/vector-icons";
import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  InputField,
  InputSlot,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import LoadingCommon from "../component/loading-common";
import * as color from "../utils/color";
import { datalogin } from "./config";
import { useAuth, useLocalStorage } from "../hook";
import { useState } from "react";

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [itemData, setItemData] = useLocalStorage();
  const handleChangeLogin = () => {
    if (username === "") {
      setError("Vui lòng nhập tài khoản để đăng nhập!!!");
      return;
    } else if (password === "") {
      setError("Vui lòng nhập mật khẩu!!!");
      return;
    } else if (username && password === "") {
      setError("Vui lòng nhập tài khoản và mật khẩu để đăng nhập!!!");
      return;
    } else if (username && password) {
      const items = datalogin.filter(
        (data) => data.phoneNumber == username && data.password === password
      );
      if (items.length === 0) {
        setError("Tài khoản và mật khẩu không tồn tại!!!");
        return;
      } else {
        setIsLoading(true); // Set isLoading to true
        setTimeout(() => {
          handleLogin(items[0]); // Pass the first item in the items array to handleLogin
          setItemData("role", items[0].role); // Store the role value in local storage
          setError(""); // Clear the error message
          setIsLoading(false); // Set isLoading to false
        }, 2000);
      }
    }
  };
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === 10 ? "ios" : "android"}
    >
      <VStack>
        <Text>{error ? error : ""}</Text>
        <Text>Tên đăng nhập:</Text>
        <Input
          variant="underlined"
          size="md"
          style={`color: ${color.color}`}
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField placeholder="Enter Name" />
        </Input>
        <Text>Mật khẩu:</Text>
        <Input
          variant="underlined"
          size="md"
          style={`color: ${color.color}`}
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputSlot>
            <InputField
              type={showPassword == true ? "text" : "password"}
              placeholder="Enter password"
            />
            <Ionicons
              name={showPassword == true ? "eye-outline" : "eye-off-outline"}
            />
          </InputSlot>
        </Input>
      </VStack>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
