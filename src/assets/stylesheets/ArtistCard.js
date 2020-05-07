import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export const styleMaker = (props) => {
  return StyleSheet.create({
    container: { width: winWidth * 0.8, height: winHeight * 0.2 },
    name: { color: "purple" },
  });
};
