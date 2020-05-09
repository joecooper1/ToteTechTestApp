import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default StyleSheet.create({
  section: { width: winWidth, height: winHeight * 0.3 },
  scrollContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    flexGrow: 1,
  },
  label: {color: 'white', fontSize: 28},
  plusMoreContainer: {
    width: winWidth * 0.4,
      height: winWidth * 0.4,
      backgroundColor: 'white',
      margin: 5,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "flex-end",
  },
  plusMoreInner: {
    width: winWidth * 0.38,
    height: winWidth * 0.38,
    backgroundColor: "grey",
    zIndex: -1,
    borderRadius: 17,
    margin: winWidth * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  plus: {
    fontSize: 60,
  }
});
