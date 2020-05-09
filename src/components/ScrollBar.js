import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";

import styles from "../assets/stylesheets/ScrollBar";

import ArtistCard from "./ArtistCard";

import { getTopArtistsByGenre, getTopTracksByGenre } from "../api/api";

export default function ScrollBar(props) {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const getElements = async () => {
      const newElements = await props.scrollThrough(props.argument);
      setElements(newElements);
    };
    //If state is not set
    // if (elements.length === 0) {
      //Use fields in data to make an api call to get elements
      getElements();
    // }
  }, [props.argument]);

  return (
    <View style={styles.section}>
      <Text style={styles.label}>{props.label}</Text>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContainer}
        scrollEnabled={true}
        horizontal={true}
      >
        {elements.map((element) => {
          return (
            <ArtistCard
              key={element.name}
              element={element}
              navigation={props.navigation}
              type={props.type}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
