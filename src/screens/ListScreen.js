import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, FlatList, Dimensions } from "react-native";

import styles from "../assets/stylesheets/ListScreen";

import { getTopArtistsByGenre } from "../api/api";

import ScrollBar from "../components/ScrollBar";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default function ListScreen({ navigation }) {
  const [topArtists, setTopArtists] = useState([]);
  const [artistOfTheDay, setArtistOfTheDay] = useState([]);
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const getTopArtists = async () => {
      const newTopArtists = await getTopArtistsByGenre();
      console.log(newTopArtists);
      setTopArtists(newTopArtists);
    };
    if (topArtists.length === 0) getTopArtists();
  });

  return (
    <View style={{ height: winHeight }}>
      <ScrollBar label="Top Artists" scrollThrough={topArtists} navigation={navigation} />
    </View>
  );
}
