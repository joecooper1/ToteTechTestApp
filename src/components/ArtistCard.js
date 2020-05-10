import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import Button from "react-native-button";

import { styleMaker } from "../assets/stylesheets/ArtistCard";

import { getImageUrl, getAlbumImageUrl } from "../api/api";

export default function ArtistCard(props) {
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    //If element has artistId, use this to get image, else use Id
    const getUrl = async () => {
      if (props.element.id.match(/alb/g)) {
        const newUrl = await getAlbumImageUrl(props.element.id);
        newUrl ? setImageUri(newUrl) : setImageUri("none");
      } else {
        const artistId = props.element.artistId
          ? props.element.artistId
          : props.element.id;
        const newUrl = await getImageUrl(artistId);
        newUrl ? setImageUri(newUrl) : setImageUri("none");
      }
    };
    if (!imageUri) getUrl();
  }, [props.element.name]);

  const styles = styleMaker(props);

  const goToPage = () => {
    props.navigation.navigate(props.type, { element: props.element });
  };

  //Check if element has artistName, and if it does render it
  const artistName = props.element.artistName ? (
    <Text style={{ color: "rgba(0, 0, 0, 0.6)" }}>
      {props.element.artistName
        .slice(0, 30)
        .concat(props.element.artistName.length > 30 ? "..." : "")}
    </Text>
  ) : null;

  //Shorten name of song/artist if too long
  const name = props.element.name
    .slice(0, 30)
    .concat(props.element.name.length > 30 ? "..." : "");

  return (
    <Button onPress={goToPage}>
      <View style={styles.container}>
        <View style={styles.name}>
          <Text>{name}</Text>
          {artistName}
        </View>
        <Image style={styles.image} source={{ uri: imageUri }} />
      </View>
    </Button>
  );
}
