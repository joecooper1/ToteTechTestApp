import React, { useState, useEffect } from "react";
import { View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import ListScreen from "./ListScreen";
import ArtistScreen from "./ArtistScreen";
import TrackScreen from "./TrackScreen";
import AlbumScreen from "./AlbumScreen";

import styles from "../assets/stylesheets/HomeScreen";

import {
  getTopArtistsByGenre,
  getTopTracksByPlaylist,
  searchByTerm,
} from "../api/api";

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
    scrollThrough: getTopTracksByPlaylist,
    argument: "pp.53250712",
    type: "Track",
    elements: null,
  },
  {
    label: "Dancehall",
    scrollThrough: getTopTracksByPlaylist,
    argument: "pp.182041037",
    type: "Track",
    elements: null,
  },
  {
    label: "1975",
    scrollThrough: getTopTracksByPlaylist,
    argument: "pp.160452881",
    type: "Track",
    elements: null,
  },
  {
    label: "Reggae Heaven",
    scrollThrough: getTopTracksByPlaylist,
    argument: "pp.236986080",
    type: "Track",
    elements: null,
  },
  {
    label: "Jamaica Pop",
    scrollThrough: getTopTracksByPlaylist,
    argument: "pp.180355606",
    type: "Track",
    elements: null,
  },
];

export default function HomeScreen({ navigation, ...props }) {
  const [data, setData] = useState(initialData);
  const [previousSearchTerm, setPreviousSearchTerm] = useState("");

  //If a search term has been updated, use data from the search to pass to listscreen, else use default data
  useEffect(() => {
    if (
      props.route.params &&
      props.route.params.searchTerm !== previousSearchTerm
    ) {
      if (props.route.params.searchTerm === "default") {
        setData(initialData);
      } else {
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
        navigation.navigate("List")
      }
      setPreviousSearchTerm(props.route.params.searchTerm);
    }
  });

  //On tab press, revert data back to default
  useEffect(() => {
    const backToHomeScreen = navigation.addListener("tabPress", (e) => {
      // Prevent default action
      setData(initialData);
    });
  }, [props.navigation]);

  //Set the search term to be passed down to list screen
  const searchTerm = props.route.params ? props.route.params.searchTerm : null;

  return (
    <View style={styles.container}>
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
            <ListScreen {...props} data={data} searchTerm={searchTerm} />
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
    </View>
  );
}
