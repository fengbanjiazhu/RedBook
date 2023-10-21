import { View, Text, TextStyle } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HStack } from "native-base";

type ToLinkProps = {
  onPress: () => void;
  text?: string;
  style?: TextStyle;
  icon?: React.JSX.Element;
};

const ToLink = ({ text, onPress, style, icon }: ToLinkProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <HStack>
        {icon ? icon : <></>}
        {text ? <Text style={style}>{text}</Text> : <></>}
      </HStack>
    </TouchableOpacity>
  );
};

export default ToLink;
