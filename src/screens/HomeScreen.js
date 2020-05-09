import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, FlatList, Dimensions } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import ListScreen from "./ListScreen";
import ArtistScreen from "./ArtistScreen";
import TrackScreen from "./TrackScreen";
import AlbumScreen from "./AlbumScreen";


import { getTopArtistsByGenre, getTopTracksByGenre } from "../api/api";

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

export default function HomeScreen({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="List"
        options={{ title: "", headerStyle: { height: 0 } }}
      >
        {(props) => <ListScreen {...props} data={data} />}
      </Stack.Screen>
      <Stack.Screen
        name="Artist"
        component={ArtistScreen}
        options={({ route }) => ({ title: route.params.element.name })}
      />
      <Stack.Screen
        name="Track"
        component={TrackScreen}
        options={({ route }) => ({ title: route.params.element.name })}
      />
      <Stack.Screen
        name="Album"
        component={AlbumScreen}
        options={({ route }) => ({ title: route.params.element.name })}
      />
    </Stack.Navigator>
  );
}
