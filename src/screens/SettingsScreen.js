import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

import styles from "../assets/stylesheets/SettingsScreen";

import { getTopTracks } from "../api/api";

export default function SettingsScreen() {
  //Set state
  const [topTracks, setTopTracks] = useState([{ id: 5 }, { id: 6 }]);

  //Get top tracks on component mounting
  useEffect(() => {
    async () => {
      if (topTracks === []) {
        const newTopTracks = await getTopTracks();
        setTopTracks(newTopTracks);
      }
    };
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
