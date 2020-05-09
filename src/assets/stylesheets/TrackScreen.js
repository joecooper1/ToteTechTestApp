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
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
      color: 'white'
    },
    albumName: {
      color: 'white',
      margin: 5,
      fontSize: 20,
      textAlign: 'center'
    },
    artistName: {
      color: 'white',
      fontSize: 15,
      textAlign: 'center'
    },
    image: {
      width: winWidth * 0.7,
      height: winWidth * 0.7,
      backgroundColor: 'rgba(0, 0, 0, 0.2)'
    }
  });