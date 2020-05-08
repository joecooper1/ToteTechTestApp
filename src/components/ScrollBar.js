import React, { useState, useEffect, useRef } from "react";
import { Text, View, ScrollView, Animated, Dimensions } from "react-native";

import styles from "../assets/stylesheets/ScrollBar";

import ArtistCard from "./ArtistCard";

export default function ScrollBar(props) {
  const [elements, setElements] = useState([]);
  const fadeAnim = useRef(new Animated.Value(500)).current;

  useEffect(() => {
    const getElements = async () => {
      const newElements = await props.scrollThrough(props.argument);
      setElements(newElements);
    };
    if (elements.length === 0) getElements();
  });

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
    }).start();
  }, []);

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
