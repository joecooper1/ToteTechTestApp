import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";

import styles from "../assets/stylesheets/ArtistScreen";

import SmallTrackCard from "../components/SmallTrackCard";

import { getTopTracksByArtist } from "../api/api";

export default function ArtistScreen(props) {
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const getTopTracks = async () => {
      const newTopTracks = await getTopTracksByArtist(
        props.route.params.element.name
      );
      setTopTracks(newTopTracks);
    };
    if (topTracks.length === 0) getTopTracks();
  });

  const artist = props.route.params.element;

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{artist.name}</Text>
      <ScrollView style={styles.scrollBar}>
        {topTracks.map((track) => {
          return <SmallTrackCard track={track} navigation={props.navigation}/>
        })}
      </ScrollView>
    </View>
  );
}
