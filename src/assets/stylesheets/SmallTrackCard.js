import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export const styleMaker = (props) => {
  return StyleSheet.create({
    container: {
      width: "90%",
      height: 40,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      margin: 5,
      display: "flex",
      alignItems: "center",
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    name: { color: "black", margin: 5, fontSize: 17, color: 'white' },
  });
};
