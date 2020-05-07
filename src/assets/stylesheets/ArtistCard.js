import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export const styleMaker = (props) => {
  const rank = props.artist["@attr"].rank;
  const bgColor = rank % 3 === 0 ? "green" : rank % 3 === 2 ? "yellow" : "red";
  const txtColor = rank % 3 === 0 ? "white" : rank % 3 === 2 ? "black" : "black";

  return StyleSheet.create({
    container: {
      width: winWidth * 0.8,
      height: winHeight * 0.2,
      backgroundColor: bgColor,
      marginTop: 30,
      color: txtColor,
      display: 'flex',
    },
    name: { color: txtColor },
  });
};
