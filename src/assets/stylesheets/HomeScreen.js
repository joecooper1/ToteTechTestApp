import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    height: winHeight,
    width: winWidth,
  },
  header: {
    height: 80,
    width: winWidth,
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10
  },
  text: {
    color: "white",
    fontSize: 40
  },
});
