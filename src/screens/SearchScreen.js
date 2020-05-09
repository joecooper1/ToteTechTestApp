import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Button from "react-native-button";

import styles from "../assets/stylesheets/SearchScreen";

export default function SearchScreen() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (text) => {
    setSearchInput(text);
  };

  const handleSubmit = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Search</Text>
      <TextInput
        placeholder="eg Marcia Griffiths"
        style={styles.input}
        onChangeText={(text) => {
          handleChange(text);
        }}
        value={searchInput}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>
          Go
        </Text>
      </TouchableOpacity>
    </View>
  );
}
