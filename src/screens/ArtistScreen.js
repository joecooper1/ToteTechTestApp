import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "../assets/stylesheets/ArtistScreen";

import SmallTrackCard from "../components/SmallTrackCard";

import { getTopTracksByArtist, getImageUrl } from "../api/api";

export default function ArtistScreen(props) {
  const [topTracks, setTopTracks] = useState([]);
  const [imageUrl, setImageUrl] = useState(
    "https://www.freeimages.com/photo/music-visualisation-1199450"
  );

  //Get top tracks of artist on page load
  useEffect(() => {
    const getTopTracks = async () => {
      const newTopTracks = await getTopTracksByArtist(
        props.route.params.element.name
      );
      setTopTracks(newTopTracks);
    };
    if (topTracks.length === 0) getTopTracks();
  });

  useEffect(() => {
    const getUrl = async () => {
      // const newUrl = await getImageUrl(topTracks[0].mbid);
      setImageUrl(
        "https://www.freeimages.com/photo/music-visualisation-1199450"
      );
    };
    if (topTracks.length !== 0 && !imageUrl) getUrl();
  });

  const artist = props.route.params.element;

  return (
    <LinearGradient
      colors={["rgb(5,54,0)", "rgb(66,55,0)", "rgb(66,3,0)"]}
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
      <ScrollView style={styles.scrollBar}>
        {topTracks.map((track) => {
          return (
            <SmallTrackCard
              key={track.name}
              track={track}
              navigation={props.navigation}
            />
          );
        })}
      </ScrollView>
    </LinearGradient>
  );
}
