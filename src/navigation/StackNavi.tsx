import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Home from "../pages/Home";

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Login: undefined;
};

const HomeStack = createStackNavigator<RootStackParamList>();

export type AllPages = "Welcome" | "Login" | "Home";

const StackNavi = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
      <HomeStack.Screen name="Welcome" component={Welcome}></HomeStack.Screen>
      <HomeStack.Screen name="Login" component={Login}></HomeStack.Screen>
      <HomeStack.Screen name="Home" component={Home}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default StackNavi;
