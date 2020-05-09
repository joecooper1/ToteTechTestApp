import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, FlatList, Dimensions } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import ListScreen from "./ListScreen";
import ArtistScreen from "./ArtistScreen";
import TrackScreen from "./TrackScreen";
import AlbumScreen from "./AlbumScreen";

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
        component={ListScreen}
        options={{ title: "", headerStyle: { height: 0 } }}
      />
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
