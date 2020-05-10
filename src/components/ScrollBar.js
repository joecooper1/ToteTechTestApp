import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  ScrollView,
  _ScrollView,
  Modal,
  ActivityIndicator,
} from "react-native";
import Button from "react-native-button";

import styles from "../assets/stylesheets/ScrollBar";

import ArtistCard from "./ArtistCard";

export default function ScrollBar(props) {
  const [elements, setElements] = useState([]);
  const [loading, setLoading] = useState(false);

  const scroller = useRef();

  useEffect(() => {
    getElements(true);
    //Scroll to beginning on new search
    scroller.current.scrollTo({ x: 0, y: 0 });
  }, [props.argument]);

  const getElements = async (isNewSearch) => {
    setLoading(true);
    //If new search, loads first page of results, else load next page and concat
    const page = isNewSearch ? 1 : elements.length / 10 + 1;
    const newElements = await props.scrollThrough(props.argument, page);
    isNewSearch
      ? setElements(newElements)
      : setElements([...elements, ...newElements]);
    setLoading(false);
  };

  //Set loading animation for getMore button
  const moreText = loading ? (
    <ActivityIndicator animating={loading} size="large" color="orange" />
  ) : (
    <Text style={styles.plus}>...</Text>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.label}>{props.label}</Text>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContainer}
        scrollEnabled={true}
        horizontal={true}
        ref={scroller}
      >
        {elements.map((element) => {
          return (
            <ArtistCard
              key={element.id}
              element={element}
              navigation={props.navigation}
              type={props.type}
            />
          );
        })}
        <Button
          onPress={() => {
            getElements(false);
          }}
        >
          <View style={styles.plusMoreContainer}>
            <View style={styles.plusMoreInner}>{moreText}</View>
          </View>
        </Button>
      </ScrollView>
    </View>
  );
}
