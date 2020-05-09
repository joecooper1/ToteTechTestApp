import React, { useState } from "react";
import { Text, View, FlatList, Dimensions } from "react-native";

import { getTopArtistsByGenre, getTopTracksByGenre } from "../api/api";

import ScrollBar from "../components/ScrollBar";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

//Set initial data to loop through for flatlist
const data = [
  {
    label: "Top Artists",
    scrollThrough: getTopArtistsByGenre,
    argument: "topartists",
    type: "Artist",
  },
  {
    label: "Reggae Heartbeat",
    scrollThrough: getTopTracksByGenre,
    argument: "pp.53250712",
    type: "Track",
  },
  {
    label: "Dancehall",
    scrollThrough: getTopTracksByGenre,
    argument: "pp.182041037",
    type: "Track",
  },
  {
    label: "1975",
    scrollThrough: getTopTracksByGenre,
    argument: "pp.160452881",
    type: "Track",
  },
];

export default function ListScreen({ navigation }) {
  const [searchResults, setSearchResults] = useState(data);

  return (
    <View
      style={{
        minHeight: winHeight,
        width: winWidth,
        backgroundColor: "black",
      }}
    >
      <FlatList
        data={searchResults}
        renderItem={({ item, index, seperators }) => {
          return (
            <ScrollBar
              label={item.label}
              scrollThrough={item.scrollThrough}
              argument={item.argument}
              navigation={navigation}
              type={item.type}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        style={{ width: winWidth, maxHeight: winHeight * 0.85 }}
        windowSize={3}
        removeClippedSubViews={true}
      />
    </View>
  );
}
