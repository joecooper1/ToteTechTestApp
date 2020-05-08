import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, FlatList, Dimensions } from "react-native";

import styles from "../assets/stylesheets/ScrollBar";

import ArtistCard from "./ArtistCard";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default function ScrollBar(props) {
  return (
    <>
      <Text>{props.label}</Text>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContainer}
        scrollEnabled={true}
      >
        {props.scrollThrough.map((artist) => {
          return (
            <ArtistCard
              key={artist.name}
              artist={artist}
              navigation={props.navigation}
            />
          );
        })}
      </ScrollView>
    </>
  );
}
