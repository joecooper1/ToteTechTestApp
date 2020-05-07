import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, FlatList, Dimensions } from "react-native";

import styles from "../assets/stylesheets/HomeScreen";

import { getTopArtistsByGenre } from "../api/api";

import ArtistCard from "../components/ArtistCard";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default function HomeScreen() {
  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    const getTopArtists = async () => {
      const newTopArtists = await getTopArtistsByGenre();
      setTopArtists(newTopArtists);
    };
    if (topArtists.length === 0) getTopArtists();
  });

  return (
    <View style={{height: winHeight}}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.container}
        scrollEnabled={true}
      >
        {topArtists.map((artist) => {
          return <ArtistCard key={artist.name} artist={artist} />;
        })}
      </ScrollView>
    </View>
  );
}
