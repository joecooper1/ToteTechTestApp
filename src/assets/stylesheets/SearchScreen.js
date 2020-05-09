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
    input: {
      color: 'white',
      marginTop: 30,
      backgroundColor: 'hsl(0,0%,20%)',
      paddingHorizontal: 30,
      paddingVertical: 10
    },
    errorMessage: {
      color: 'red',
      textAlign: 'center'
    },
    submitButton: {
      marginTop: 40,
      backgroundColor: 'green',
      width: 50,
      height: 50,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center'
    },
    submitText: {
      color: 'white'
    }
  });