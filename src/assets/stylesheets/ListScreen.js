import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  }
});
