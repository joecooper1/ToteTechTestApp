import React from "react";
import { Text, View, FlatList, Dimensions } from "react-native";

import { getTopArtistsByGenre, getTopTracksByGenre } from "../api/api";

import ScrollBar from "../components/ScrollBar";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

const data = [
  {
    label: "Top Artists",
    scrollThrough: getTopArtistsByGenre,
    argument: "",
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
];

export default function ListScreen({ navigation }) {
  return (
    <View
      style={{
        minHeight: winHeight,
        width: winWidth,
        backgroundColor: "black",
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item, index, seperators }) => {
          return (
            <ScrollBar
              label={item.label}
              scrollThrough={item.scrollThrough}
              argument={item.argument}
              navigation={navigation}
              type={item.type}
              key={item.argument}
            />
          );
        }}
        style={{ width: winWidth, minHeight: winHeight }}
      />
    </View>
  );
}
