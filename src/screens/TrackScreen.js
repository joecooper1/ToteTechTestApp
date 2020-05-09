import React, { useState, useEffect } from "react";
import { Text, Image } from "react-native";
import Button from "react-native-button";
import { LinearGradient } from "expo-linear-gradient";

import styles from "../assets/stylesheets/TrackScreen";

import { getAlbumImageUrl } from "../api/api";

export default function TrackScreen(props) {
  const [albumUrl, setAlbumUrl] = useState(null);
  const [trackId, setTrackId] = useState(props.route.params.element.id);

  //Get album url
  useEffect(() => {
    const getUrl = async () => {
      const newUrl = await getAlbumImageUrl(props.route.params.element.albumId);
      setAlbumUrl(newUrl);
    };
    if (!albumUrl || trackId !== props.route.params.element.id) getUrl();
  });

  const track = props.route.params.element;

  //Link to artist screen
  const goToPage = (type, name, id) => {
    props.navigation.navigate(type, { element: { name, id } });
  };

  return (
    <LinearGradient
      colors={["rgb(66,55,0)", "rgb(5,54,0)", "rgb(66,3,0)"]}
      style={styles.container}
    >
      <Image style={styles.image} source={{ uri: albumUrl }} />
      <Text style={styles.trackName}>{track.name}</Text>
      <Button onPress={() => goToPage('Album', track.albumName, track.albumId)}>
        <Text style={styles.albumName}>{track.albumName}</Text>
      </Button>
      <Button onPress={() => goToPage('Artist', track.artistName, track.artistId)}>
        <Text style={styles.artistName}>{track.artistName}</Text>
      </Button>
    </LinearGradient>
  );
}
