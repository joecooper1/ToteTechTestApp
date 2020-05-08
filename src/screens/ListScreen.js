import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, FlatList, Dimensions } from "react-native";

import styles from "../assets/stylesheets/ListScreen";

import { getTopArtistsByGenre, getTopTracksByGenre } from "../api/api";

import ScrollBar from "../components/ScrollBar";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default function ListScreen({ navigation }) {
  const [topArtists, setTopArtists] = useState([]);
  const [artistOfTheDay, setArtistOfTheDay] = useState([]);
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const getTopArtists = async () => {
      const newTopArtists = await getTopArtistsByGenre();
      setTopArtists(newTopArtists);
    };
    if (topArtists.length === 0) getTopArtists();
  });

  useEffect(() => {
    const getTopTracks = async () => {
      const newTopTracks = await getTopTracksByGenre();
      setTopTracks(newTopTracks);
    };
    if (topArtists.length !== 0 && topTracks.length === 0) getTopTracks();
  });

  return (
    <View
      style={{
        minHeight: winHeight,
        width: winWidth,
        backgroundColor: "black",
      }}
    >
      <ScrollBar
        label="Top Artists"
        scrollThrough={topArtists}
        navigation={navigation}
        type="Artist"
      />
      <ScrollBar
        label="Top Tracks"
        scrollThrough={topTracks}
        navigation={navigation}
        type="Track"
      />
    </View>
  );
}
