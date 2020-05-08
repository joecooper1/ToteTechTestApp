import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    trackName: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: 'white'
    },
    artistName: {
      color: 'white',
    }
  });