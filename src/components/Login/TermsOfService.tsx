import { View, Text, Image, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import React, { useState } from "react";
import icon_unselected from "../../../assets/icon_unselected.png";
import icon_selected from "../../../assets/icon_selected.png";

type TermProps = {
  style?: ViewStyle;
};

const TermsOfService = ({ style }: TermProps) => {
  const [check, setCheck] = useState<boolean>(false);
  return (
    <View style={[styles.protocolLayout, style]}>
      <TouchableOpacity
        onPress={() => {
          setCheck(!check);
        }}
      >
        <Image
          style={styles.radioButton}
          source={check ? icon_selected : icon_unselected}
          alt="check-button"
        />
      </TouchableOpacity>
      <Text style={styles.labelText}>I am agree with ...</Text>
      <TouchableOpacity>
        <Text style={styles.protocolText}>Agreement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TermsOfService;

const styles = StyleSheet.create({
  protocolLayout: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  protocolText: {
    color: "blue",
  },
  radioButton: {
    width: 20,
    height: 20,
  },
  labelText: {
    fontSize: 12,
    color: "#999",
    marginLeft: 6,
  },
});
