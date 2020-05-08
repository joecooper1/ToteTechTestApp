import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, FlatList, Dimensions } from "react-native";

import styles from "../assets/stylesheets/ScrollBar";

import ArtistCard from "./ArtistCard";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default function ScrollBar(props) {
  return (
    <View style={styles.section}>
      <Text style={{ color: "white" }}>{props.label}</Text>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContainer}
        scrollEnabled={true}
        horizontal={true}
      >
        {props.scrollThrough.map((element) => {
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
