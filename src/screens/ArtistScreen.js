import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

import styles from "../assets/stylesheets/ArtistScreen";

export default function ArtistScreen(props) {
  
  const artist = props.route.params.artist;

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{artist.name}</Text>
    </View>
  );
}
