import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, FlatList, Dimensions } from "react-native";

import styles from "../assets/stylesheets/ListScreen";

import { getTopArtistsByGenre, getTopTracksByGenre } from "../api/api";

import ScrollBar from "../components/ScrollBar";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default function ListScreen({ navigation }) {

  return (
    <View
      style={{
        minHeight: winHeight,
        width: winWidth,
        backgroundColor: "black",
      }}
    >
      <ScrollBar
        label="Top Artists"
        scrollThrough={getTopArtistsByGenre}
        argument={''}
        navigation={navigation}
        type="Artist"
      />
      <ScrollBar
        label="Reggae HeartBeat"
        scrollThrough={getTopTracksByGenre}
        argument={'pp.53250712'}
        navigation={navigation}
        type="Track"
      />
    </View>
  );
}
