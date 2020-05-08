import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export const styleMaker = (props) => {
  const rank = props.element["@attr"].rank;
  const bgColor = rank % 3 === 0 ? "green" : rank % 3 === 2 ? "yellow" : "red";
  const txtColor =
    rank % 3 === 0 ? "white" : rank % 3 === 2 ? "black" : "black";
  const textPosition = rank % 2 === 1 ? "flex-start" : "flex-end";

  return StyleSheet.create({
    container: {
      width: winWidth * 0.4,
      height: winWidth * 0.4,
      backgroundColor: bgColor,
      margin: 5,
      color: txtColor,
      display: "flex",
      borderRadius: 20,
      alignItems: textPosition,
    },
    name: { color: txtColor, margin: 20, fontSize: 17 },
  });
};
