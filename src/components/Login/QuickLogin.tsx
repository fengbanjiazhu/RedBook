import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import TermsOfService from "./TermsOfService";
import icon_main_logo from "../../../assets/icon_main_logo.png";

const QuickLogin = () => {
  return (
    <View style={styles.root}>
      <Image style={styles.mainLogo} source={icon_main_logo} />
      <TermsOfService></TermsOfService>
    </View>
  );
};

export default QuickLogin;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "95%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainLogo: {
    width: 210,
    height: 110,
    marginTop: 200,
    backgroundColor: "white",
    resizeMode: "contain",
  },
  radioButton: {
    width: 16,
    height: 16,
  },
});
