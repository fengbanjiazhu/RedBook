import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { HStack, Icon, Input } from "native-base";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import CountryCodeSelect from "./CountryCodeSelect";
import ToLink from "../UI/ToLink";
import QuickLoginBtn from "./QuickLoginBtn";
import TermsOfService from "./TermsOfService";

const InputLogin = () => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.tips}>Auto signup for unregistered accounts</Text>

      <View style={styles.formLayout}>
        <Input
          variant="underlined"
          size="lg"
          placeholder="Mobile number"
          InputLeftElement={<CountryCodeSelect />}
        />

        <Input
          style={{ marginTop: 10 }}
          variant="underlined"
          type={show ? "text" : "password"}
          size="lg"
          placeholder="Password"
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
        />
        <HStack style={styles.links}>
          <ToLink text="Code login" onPress={() => {}} style={{ color: "blue" }} />
          <ToLink text="Forget Password?" onPress={() => {}} style={{ color: "blue" }} />
        </HStack>

        <QuickLoginBtn button="original" label="Login" style={{ marginBottom: 10 }} />

        <TermsOfService />
      </View>
    </View>
  );
};

export default InputLogin;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    color: "#333",
    fontWeight: "bold",
    marginTop: 60,
  },
  tips: {
    fontSize: 14,
    color: "#999",
    marginTop: 5,
    marginBottom: 20,
  },
  formLayout: {
    width: "100%",
    height: 64,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  },
  links: {
    marginVertical: 10,
    width: 250,
    justifyContent: "space-between",
  },
});
