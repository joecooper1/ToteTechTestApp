import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

import styles from "../assets/stylesheets/TrackScreen";

export default function TrackScreen(props) {

  const track = props.route.params.element;

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{track.name}</Text>
    </View>
  );
}
