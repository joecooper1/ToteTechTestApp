import React from "react";
import { View, Text, Image } from "react-native";
import Button from "react-native-button";

import { styleMaker } from "../assets/stylesheets/ArtistCard";

export default function ArtistCard(props) {
  const styles = styleMaker(props);

  const goToPage = () => {
    props.navigation.navigate(props.type, {element: props.element});
  };

  return (
    <Button onPress={goToPage}>
      <View style={styles.container}>
        <Text style={styles.name}>{props.element.name}</Text>
      </View>
    </Button>
  );
}
