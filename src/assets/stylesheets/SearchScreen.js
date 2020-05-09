import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: 'white'
    },
    textInputContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline'
    },
    input: {
      color: 'white',
      marginTop: 30,
      backgroundColor: 'hsl(0,0%,20%)',
      paddingHorizontal: 30,
      height: 43
    },
    errorMessage: {
      color: 'red',
      textAlign: 'center',
      height: 60
    },
    searchIcon: {
      color: 'white',
      backgroundColor: 'hsl(0,0%,30%)',
      width: 40,
      height: 43,
      textAlign: 'center',
    },
    submitText: {
      color: 'white'
    }
  });