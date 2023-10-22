import { View, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";

import { useReplaceToPage } from "../Hooks/useJumpToPage";

import icon_main_logo from "../../assets/icon_main_logo.png";

const Welcome = () => {
  const jumpToLogin = useReplaceToPage("Login");

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
