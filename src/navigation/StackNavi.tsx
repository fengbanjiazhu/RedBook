import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";

const HomeStack = createStackNavigator();

const StackNavi = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
      <HomeStack.Screen name="Welcome" component={Welcome}></HomeStack.Screen>
      <HomeStack.Screen name="Login" component={Login}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default StackNavi;
