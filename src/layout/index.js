import Easing from "react-native";
import { useSelector } from "react-redux";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import createDrawerNavigator from "@react-navigation/drawer";
import React from "react";
import ProductScreen from "../product-view";
import CartScreen from "../cart-view";
import ImportWareHouseScreen from "../import-ware-house-view";
import CreateProductScreen from "../create-product-view";
import ListOrderScreen from "../list-order-view";
import DetailOrderScreen from "../detail-order-view";
import CustomeDrawer from "./side-bar-component";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const config = {
  animation: " timing ",
  config: { duration: 200, easing: (linear = Easing) },
};
const handleTakeToken = () => {
  const useToken = useSelector((state) => state.auth).token;
};
const ProductNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ gestureEnabled: true, headerMode: "none" }}
      cardStyleInterpolator={CardStyleInterpolators.forHorizontalIOS}
    >
      <Stack.Screen
        name="ProductScreen"
        options={{ headerShown: false, unmountOnBlur: true }}
      />
      <Stack.Screen
        name="CartScreen"
        options={{ headerShown: false, unmountOnBlur: true }}
      />
    </Stack.Navigator>
  );
};

const WareHouseNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ gestureEnabled: true, headerMode: "none" }}
      cardStyleInterpolator={CardStyleInterpolators.forHorizontalIOS}
    >
      <Stack.Screen
        name="ImportWareHouseScreen"
        options={{ headerShown: false, unmountOnBlur: true }}
      />
      <Stack.Screen
        name="CreateProduct"
        options={{ headerShown: false, unmountOnBlur: true }}
      />
    </Stack.Navigator>
  );
};
