import { View, StyleSheet, Image } from "react-native";
import React from "react";

const Welcome = () => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.mainLogo}
        source={{
          uri: "https://github.com/fengbanjiazhu/RedBook/blob/main/assets/icon_main_logo.png?raw=true",
        }}
        alt="mainlogo"
      />
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
    width: 200,
    height: 110,
    marginTop: 300,
    backgroundColor: "white",
  },
});
