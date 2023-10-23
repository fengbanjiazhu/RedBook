import { View, Text, StyleSheet, Pressable, Image, LayoutAnimation, Alert } from "react-native";
import { HStack, Icon, IconButton, Input } from "native-base";
import React, { useCallback, useState } from "react";
import { useReplaceToPage } from "../../Hooks/useJumpToPage";

import { getUserData } from "../../utils/Request";

import CountryCodeSelect from "./CountryCodeSelect";
import ToLink from "../UI/ToLink";
import QuickLoginBtn from "./QuickLoginBtn";
import TermsOfService from "./TermsOfService";

import { MaterialIcons } from "@expo/vector-icons";
import icon_wx from "../../../assets/icon_wx.png";
import icon_qq from "../../../assets/icon_qq.webp";

import { LoginTypes } from "../../pages/Login";
import { twoButtonAlert } from "../../utils/AlertHelper";

type InputLoginProps = {
  onClose: React.Dispatch<React.SetStateAction<LoginTypes>>;
};

const InputLogin = ({ onClose }: InputLoginProps) => {
  const [show, setShow] = useState(false);
  const [check, setCheck] = useState(false);

  const [account, setAccount] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const emptyInput = password.length < 5 || account === "";

  const loginToHome = useReplaceToPage("Home");

  const handleAccChange = useCallback((newText: string) => {
    setAccount(newText);
  }, []);
  const handlePwdChange = useCallback((newText: string) => {
    setPassword(newText);
  }, []);

  return (
    <View style={styles.root}>
      <IconButton
        style={styles.close}
        size={"md"}
        variant="ghost"
        _icon={{
          as: MaterialIcons,
          name: "close",
          color: "black",
        }}
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          onClose("quick");
        }}
      />

      <Text style={styles.title}>Login</Text>
      <Text style={styles.tips}>Auto signup for unregistered accounts</Text>

      <View style={styles.formLayout}>
        <Input
          variant="underlined"
          keyboardType="number-pad"
          size="lg"
          placeholder="Mobile number"
          InputLeftElement={<CountryCodeSelect />}
          onChangeText={handleAccChange}
        />

        <Input
          style={{ marginTop: 10 }}
          variant="underlined"
          onChangeText={handlePwdChange}
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

        <QuickLoginBtn
          onPress={async () => {
            if (emptyInput || !check) return;

            const data = await getUserData(account, password);

            if (data.message) return twoButtonAlert("Error", data.message);

            loginToHome();
          }}
          button="original"
          label="Login"
          style={
            emptyInput ? { marginBottom: 10, backgroundColor: "#b0b0b0" } : { marginBottom: 10 }
          }
        />

        <TermsOfService check={check} setCheck={setCheck} />

        <HStack space={20} marginTop={20}>
          <ToLink
            icon={<Image style={{ width: 60, height: 60 }} source={icon_wx} alt="WeChat icon" />}
            onPress={() => {}}
          ></ToLink>

          <ToLink
            icon={<Image style={{ width: 60, height: 60 }} source={icon_qq} alt="QQ icon" />}
            onPress={() => {}}
          ></ToLink>
        </HStack>
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
  close: {
    top: 70,
    left: 10,
    position: "absolute",
    color: "black",
  },
  title: {
    fontSize: 28,
    color: "#333",
    fontWeight: "bold",
    marginTop: 100,
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
