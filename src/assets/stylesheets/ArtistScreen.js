import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    scrollBar: {
      maxHeight: winHeight * 0.4,
      width: winWidth * 0.95,
      margin: winWidth * 0.05,
    },
    image: {
      width: winWidth * 0.5,
      height: winWidth * 0.5,
    }
  });