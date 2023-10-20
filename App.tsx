import "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import StackNavi from "./src/navigation/StackNavi";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavi />
    </NavigationContainer>
  );
}
