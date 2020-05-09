import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import styles from "../assets/stylesheets/SearchScreen";

import { searchByTerm } from "../api/api";

export default function SearchScreen() {
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //Change text in input box
  const handleChange = (text) => {
    setSearchInput(text);
    setErrorMessage('');
  };

  //Set error message if necessary, or perform search
  const handleSubmit = async () => {
    if (!searchInput) {
      setErrorMessage("Don't ask, don't get -\nEnter something to search for");
    } else {
      setSearchInput('');
      const searchResults = await searchByTerm(searchInput);
    }
  };

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
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Go</Text>
      </TouchableOpacity>
    </View>
  );
}
