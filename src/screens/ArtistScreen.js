import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

import styles from "../assets/stylesheets/ArtistScreen";

import { getArtistInfo } from "../api/api";

export default function ArtistScreen(props) {
  const [artistInfo, setArtistInfo] = useState("");
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      const newArtistInfo = await getArtistInfo(props.route.params.element.name);
      setArtistInfo(newArtistInfo);
    };
    if (artistInfo === "") getInfo();
  });

  const artist = props.route.params.element;

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{artist.name}</Text>
      <Text>{artistInfo}</Text>
    </View>
  );
}
