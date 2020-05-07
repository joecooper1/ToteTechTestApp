import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

import styles from "../assets/stylesheets/ArtistScreen";

export default function ArtistScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Artist</Text>
    </View>
  );
}