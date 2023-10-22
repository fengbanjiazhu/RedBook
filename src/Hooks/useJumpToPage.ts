import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/StackNavi";
import { AllPages } from "../navigation/StackNavi";

type LoginScreenProp = StackNavigationProp<RootStackParamList, "Login">;

export const useJumpToPage = (page: AllPages) => {
  const navigation = useNavigation<LoginScreenProp>();
  const jumpToPage = function () {
    navigation.navigate(page);
  };

  return jumpToPage;
};

export const useReplaceToPage = (page: AllPages) => {
  const navigation = useNavigation<LoginScreenProp>();
  const jumpToPage = function () {
    navigation.replace(page);
  };

  return jumpToPage;
};
