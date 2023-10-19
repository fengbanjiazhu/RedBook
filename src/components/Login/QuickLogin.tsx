import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import TermsOfService from "./TermsOfService";
import icon_main_logo from "../../../assets/icon_main_logo.png";
import { LoginTypes } from "../../pages/Login";

const QuickLogin = ({
  onTextPress,
}: {
  onTextPress: React.Dispatch<React.SetStateAction<LoginTypes>>;
}) => {
  return (
    <View style={styles.root}>
      <Image style={styles.mainLogo} source={icon_main_logo} />
      <TouchableOpacity
        onPress={() => {
          onTextPress("input");
        }}
        style={styles.otherLogin}
      >
        <Text>Other way for login</Text>
      </TouchableOpacity>
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
  otherLogin: {},
  radioButton: {
    width: 16,
    height: 16,
  },
});
