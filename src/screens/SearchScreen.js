import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import styles from "../assets/stylesheets/SearchScreen";

import { Ionicons } from "@expo/vector-icons";

export default function SearchScreen({ navigation }) {
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //Change text in input box
  const handleChange = (text) => {
    setSearchInput(text);
    setErrorMessage("");
    if (/([^A-Za-z1-9\s])/g.test(text)) {
      setErrorMessage("Letters, numbers and\nspaces only, please")
    }
  };

  //Set error message if necessary, or perform search
  const handleSubmit = async () => {
    if (!searchInput) {
      setErrorMessage("Don't ask, don't get -\nEnter something to search for");
    } else if (!errorMessage) {
      //Go to homepage, with formatted search results as newdata
      navigation.jumpTo("Browse", {
        searchTerm: searchInput,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Search</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="eg Marcia Griffiths"
          style={styles.input}
          onChangeText={(text) => {
            handleChange(text);
          }}
          value={searchInput}
          onSubmitEditing={handleSubmit}
        />
        <TouchableOpacity onPress={handleSubmit}>
          <Ionicons name="md-search" size={40} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
}
