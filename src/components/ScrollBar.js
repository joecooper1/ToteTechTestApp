import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, FlatList, Dimensions } from "react-native";

import styles from "../assets/stylesheets/ScrollBar";

import ArtistCard from "./ArtistCard";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default function ScrollBar(props) {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const getElements = async () => {
      const newElements = await props.scrollThrough(props.argument);
      setElements(newElements);
    };
    if (elements.length === 0) getElements();
  });

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
