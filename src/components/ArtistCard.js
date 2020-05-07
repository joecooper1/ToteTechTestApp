import React from "react";
import { View, Text, Image } from "react-native";

import {styleMaker} from "../assets/stylesheets/ArtistCard";

export default function ArtistCard(props) {
  const styles = styleMaker(props);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.artist.name}</Text>
    </View>
  );
};
