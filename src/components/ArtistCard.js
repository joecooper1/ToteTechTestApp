import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import Button from "react-native-button";

import { styleMaker } from "../assets/stylesheets/ArtistCard";

import { getImageUrl } from "../api/api";

export default function ArtistCard(props) {
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    const getUrl = async () => {
      const artistId = props.element.artistId ? props.element.artistId : props.element.id;
      const newUrl = await getImageUrl(artistId);
      newUrl ? setImageUri(newUrl) : setImageUri('none');
    };
    if (!imageUri) getUrl();
  });
  // console.log(props.element.artistId, props.element.id);

  const styles = styleMaker(props);

  const goToPage = () => {
    props.navigation.navigate(props.type, { element: props.element });
  };

  const artistName = props.element.artistName ? (
    <Text style={{ color: "rgba(0, 0, 0, 0.6)" }}>
      {props.element.artistName}
    </Text>
  ) : null;

  return (
    <Button onPress={goToPage}>
      <View style={styles.container}>
        <View style={styles.name}>
          <Text>{props.element.name}</Text>
          {artistName}
        </View>
        <Image style={styles.image} source={{uri: imageUri}}/>
      </View>
    </Button>
  );
}
