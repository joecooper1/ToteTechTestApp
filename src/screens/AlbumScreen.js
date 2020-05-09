import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "../assets/stylesheets/ArtistScreen";

import SmallTrackCard from "../components/SmallTrackCard";

import { getTracksByAlbum, getAlbumImageUrl } from "../api/api";

export default function ArtistScreen(props) {
  const [tracks, setTracks] = useState([]);
  const [albumUri, setAlbumUri] = useState(null);

  //Get tracks on page load
  useEffect(() => {
    const getTracks = async () => {
      const newTracks = await getTracksByAlbum(album.id);
      setTracks(newTracks);
    };
    if (tracks.length === 0) getTracks();
  });

  //Get album url
  useEffect(() => {
    const getUrl = async () => {
      const newUrl = await getAlbumImageUrl(album.id);
      setAlbumUri(newUrl);
    };
    if (tracks.length !== 0 && !albumUri) getUrl();
  });

  const album = props.route.params.element;

  return (
    <LinearGradient
      colors={["rgb(5,54,0)", "rgb(66,55,0)", "rgb(66,3,0)"]}
      style={styles.container}
    >
      <Image style={styles.image} source={{ uri: albumUri }} />
      <ScrollView style={styles.scrollBar}>
        {tracks.map((track) => {
          return (
            <SmallTrackCard
              key={track.id}
              track={track}
              navigation={props.navigation}
            />
          );
        })}
      </ScrollView>
    </LinearGradient>
  );
}
