import React, { Component } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-fa-icons";

import styles from "./styles";

class Search extends Component {
  state = {};
  render() {
    return (
      <View style={styles.searchWrapper}>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.searchInput} />
          <Icon name="search" style={styles.searchInputIcon} />
        </View>
        <TouchableOpacity style={styles.voiceBtn} activeOpacity={0.6}>
          <Icon name="microphone" style={styles.voiceIcon} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Search;
