import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
// import

import StackNavi from "./src/navigation/StackNavi";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StackNavi />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
