import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavi from "./src/navigation/StackNavi";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavi />
    </NavigationContainer>
  );
}
