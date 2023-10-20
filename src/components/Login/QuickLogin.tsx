import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import TermsOfService from "./TermsOfService";
import icon_main_logo from "../../../assets/icon_main_logo.png";
import icon_arrow from "../../../assets/icon_arrow.png";
import { LoginTypes } from "../../pages/Login";
import QuickLoginBtn from "./QuickLoginBtn";

const QuickLogin = ({
  onTextPress,
}: {
  onTextPress: React.Dispatch<React.SetStateAction<LoginTypes>>;
}) => {
  return (
    <View style={styles.root}>
      <Image style={styles.mainLogo} source={icon_main_logo} />

      <View style={styles.layout}>
        <QuickLoginBtn button="original" label="Quick Login" />
        <QuickLoginBtn button="weChat" label="WeChat Login" />

        <TouchableOpacity
          onPress={() => {
            onTextPress("input");
          }}
          style={styles.otherLogin}
        >
          <Text style={styles.otherLoginText}>Other way for login</Text>
          <Image style={styles.arrow} source={icon_arrow} />
        </TouchableOpacity>
      </View>

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
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainLogo: {
    width: 180,
    height: 95,
    marginVertical: 200,
    backgroundColor: "white",
    resizeMode: "contain",
  },
  layout: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 60,
  },
  otherLogin: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  otherLoginText: {
    fontSize: 14,
    color: "#303080",
  },
  arrow: {
    width: 16,
    height: 16,
    marginLeft: 6,
    resizeMode: "contain",
    transform: [{ rotate: "180deg" }],
  },
  radioButton: {
    width: 16,
    height: 16,
  },
});
