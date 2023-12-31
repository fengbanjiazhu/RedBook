import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import QuickLogin from "../components/Login/QuickLogin";
import InputLogin from "../components/Login/InputLogin";

export type LoginTypes = "quick" | "input";

const Login = () => {
  const [loginType, setLoginType] = useState<LoginTypes>("quick");

  return (
    <View style={styles.root}>
      <View>
        {loginType === "quick" ? (
          <QuickLogin onTextPress={setLoginType} />
        ) : (
          <InputLogin onClose={setLoginType} />
        )}
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 56,
  },
  mainLogo: {
    width: 210,
    height: 110,
    marginTop: 200,
    backgroundColor: "white",
    resizeMode: "contain",
  },
});
