import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default StyleSheet.create({
  section: {width: winWidth, height: winHeight * 0.4},
  scrollContainer: {
    width: winWidth,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    flexGrow: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
