import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export const styleMaker = (props) => {
  // const rank = props.element["@attr"].rank;
  const rank = 1;
  const bgColor = rank % 3 === 0 ? "green" : rank % 3 === 2 ? "yellow" : "red";

  return StyleSheet.create({
    container: {
      width: winWidth * 0.4,
      height: winWidth * 0.4,
      backgroundColor: 'white',
      margin: 5,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "flex-end",
    },
    image: {
      width: winWidth * 0.38,
      height: winWidth * 0.38,
      backgroundColor: "grey",
      zIndex: -1,
      borderRadius: 17,
      margin: winWidth * 0.01
    },
    name: {
      color: 'black',
      fontSize: 17,
      padding: 5,
      borderRadius: 17,
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      position: 'absolute',
      width: winWidth * 0.38,
      bottom: winWidth * 0.01
    },
  });
};
