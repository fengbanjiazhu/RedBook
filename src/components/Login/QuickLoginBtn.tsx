import { Image, Text, TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import React from "react";
import wx_small from "../../../assets/icon_wx_small.png";

type QuickButtonProps = {
  label: string;
  button: "original" | "weChat";
  style?: ViewStyle;
  onPress?: () => void;
};

const QuickLoginBtn = ({ button, label, style, onPress }: QuickButtonProps) => {
  const buttonType = button === "weChat";

  return (
    <TouchableOpacity
      style={[styles.root, buttonType ? styles.weChat : styles.original, style]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {buttonType ? <Image style={styles.buttonIcon} source={wx_small} /> : null}

      <Text style={styles.weChatText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default QuickLoginBtn;

const styles = StyleSheet.create({
  root: {
    width: 240,
    height: 56,
    borderRadius: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  weChat: {
    backgroundColor: "#05c160",
  },
  original: {
    backgroundColor: "#ff2442",
  },
  weChatText: {
    fontSize: 18,
    color: "white",
    marginLeft: 6,
  },
  buttonIcon: {
    width: 32,
    height: 32,
  },
});
