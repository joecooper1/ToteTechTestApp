import * as React from 'react';
import { Text, View } from 'react-native';

import styles from '../assets/stylesheets/SettingsScreen';

export default function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Settings</Text>
      </View>
    );
  }