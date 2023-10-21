import { View, StyleSheet, Image, Button } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { useJumpToPage } from "../Hooks/useJumpToPage";

import icon_main_logo from "../../assets/icon_main_logo.png";

import { RootStackParamList } from "../navigation/StackNavi";

type welcomeScreenProp = StackNavigationProp<RootStackParamList, "Welcome">;

const Welcome = () => {
  const jumpToLogin = useJumpToPage("Login");

  useEffect(() => {
    setTimeout(() => {
      jumpToLogin();
    }, 3000);
  });

  return (
    <View style={styles.root}>
      <Image style={styles.mainLogo} source={icon_main_logo} alt="mainlogo" />
    </View>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
  },
  mainLogo: {
    width: 210,
    height: 110,
    marginTop: 200,
    backgroundColor: "white",
    resizeMode: "contain",
  },
});
