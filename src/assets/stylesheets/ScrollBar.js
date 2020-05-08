import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default StyleSheet.create({
  section: { width: winWidth, height: winHeight * 0.4 },
  scrollContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    flexGrow: 1,
  },
});
