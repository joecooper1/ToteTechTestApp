import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Button from "react-native-button";
import { LinearGradient } from "expo-linear-gradient";

import styles from "../assets/stylesheets/TrackScreen";

export default function TrackScreen(props) {
  const track = props.route.params.element;

  //Link to artist screen
  const goToPage = (name, id) => {
    props.navigation.navigate('Artist', {element: {name, id}})
  }

  return (
    <LinearGradient
      colors={["rgb(66,55,0)", "rgb(5,54,0)", "rgb(66,3,0)"]}
      style={styles.container}
    >
      <Text style={styles.trackName}>{track.name}</Text>
      <Button onPress={() => goToPage(track.artistName, track.artistId)}>
        <Text style={styles.artistName}>{track.artistName}</Text>
      </Button>
    </LinearGradient>
  );
}
