import React, { useState, useEffect } from "react";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import ListScreen from "./ListScreen";
import ArtistScreen from "./ArtistScreen";
import TrackScreen from "./TrackScreen";
import AlbumScreen from "./AlbumScreen";

import {
  getTopArtistsByGenre,
  getTopTracksByGenre,
  searchByTerm,
} from "../api/api";
import { set } from "react-native-reanimated";

//Set initial data to loop through for flatlist
const initialData = [
  {
    label: "Top Artists",
    scrollThrough: getTopArtistsByGenre,
    argument: "topartists",
    type: "Artist",
    elements: null,
  },
  {
    label: "Reggae Heartbeat",
    scrollThrough: getTopTracksByGenre,
    argument: "pp.53250712",
    type: "Track",
    elements: null,
  },
  {
    label: "Dancehall",
    scrollThrough: getTopTracksByGenre,
    argument: "pp.182041037",
    type: "Track",
    elements: null,
  },
  {
    label: "1975",
    scrollThrough: getTopTracksByGenre,
    argument: "pp.160452881",
    type: "Track",
    elements: null,
  },
];

export default function HomeScreen(props) {
  const [data, setData] = useState(initialData);
  const [previousSearchTerm, setPreviousSearchTerm] = useState("");

  //If a search term has been updated, use data from the search to pass to listscreen, else use default data
  useEffect(() => {
    if (
      props.route.params &&
      props.route.params.searchTerm !== previousSearchTerm
    ) {
      setData([
        {
          label: "Artists",
          scrollThrough: searchByTerm,
          argument: { term: props.route.params.searchTerm, type: "artist" },
          type: "Artist",
          elements: props.route.params.searchTerm,
        },
        {
          label: "Tracks",
          scrollThrough: searchByTerm,
          argument: { term: props.route.params.searchTerm, type: "track" },
          type: "Track",
          elements: props.route.params.searchTerm,
        },
        {
          label: "Albums",
          scrollThrough: searchByTerm,
          argument: { term: props.route.params.searchTerm, type: "album" },
          type: "Album",
          elements: props.route.params.searchTerm,
        },
      ]);
      setPreviousSearchTerm(props.route.params.searchTerm);
    }
  });

  //Set the search term to be passed down to list screen
  const searchTerm = props.route.params ? props.route.params.searchTerm : null;

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
        {(props) => (
          <ListScreen
            {...props}
            data={data}
            searchTerm={searchTerm}
          />
        )}
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
