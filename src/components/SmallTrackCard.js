import React from "react";
import { View, Text, Image } from "react-native";
import Button from "react-native-button";

import { styleMaker } from "../assets/stylesheets/SmallTrackCard";

export default function SmallTrackCard(props) {
  const styles = styleMaker(props);

  const goToPage = () => {
    props.navigation.navigate("Track", { element: props.track });
  };

  //Shorten text to fit in lines, add ... to any that exceed the max limit
  const nameText = props.track.name
    .slice(0, 20)
    .concat(props.track.name.length > 20 ? "..." : "");

  //Convert time into minutes and seconds
  const minutes = Math.floor(props.track.playbackSeconds / 60);
  let seconds = props.track.playbackSeconds % 60;
  seconds < 10 && (seconds = `0${seconds}`);
  const songLength = `${minutes}:${seconds}`;

  return (
    <Button onPress={goToPage}>
      <View style={styles.container}>
        <Text style={styles.name}>{nameText}</Text>
        <Text style={styles.name}>{songLength}</Text>
      </View>
    </Button>
  );
}
