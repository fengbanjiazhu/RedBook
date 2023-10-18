import { View, StyleSheet, Image } from "react-native";
import React from "react";
import icon_main_logo from "../../assets/icon_main_logo.png";

const Welcome = () => {
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
