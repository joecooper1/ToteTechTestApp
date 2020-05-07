import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

import styles from "../assets/stylesheets/SettingsScreen";

import { getTopTracks } from "../api/api";

export default function SettingsScreen() {
  const [topTracks, setTopTracks] = useState([{ id: 5 }, { id: 6 }]);
  useEffect(async () => {
    const topTracks = await getTopTracks();
    console.log(topTracks);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Settings</Text>
      {topTracks.map((track) => {
        return <Text key={track.id}>{track.id}</Text>;
      })}
    </View>
  );
}
