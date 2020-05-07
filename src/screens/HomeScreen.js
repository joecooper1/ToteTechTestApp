import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

import styles from "../assets/stylesheets/HomeScreen";

import { getTopArtistsByGenre } from "../api/api";

export default function HomeScreen() {
  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    const getTopArtists = async () => {
      const newTopArtists = await getTopArtistsByGenre();
      console.log(newTopArtists);
      setTopArtists(newTopArtists);
    };
    if (topArtists.length === 0) getTopArtists();
  });

  return (
    <View style={styles.container}>
      {topArtists.map((artist) => {
        return <Text key={artist.name}>{artist.name}</Text>;
      })}
    </View>
  );
}
