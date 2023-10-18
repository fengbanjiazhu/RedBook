import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../pages/Welcome";

const HomeStack = createStackNavigator();

const StackNavi = () => {
  return (
    <HomeStack.Navigator initialRouteName="Welcome">
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Welcome"
        component={Welcome}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default StackNavi;
