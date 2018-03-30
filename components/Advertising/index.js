import React, { Component } from "react";
import { View, Text } from "react-native";

import styles from "./styles";

class Advertising extends Component {
  state = {};
  render() {
    return (
      <View style={styles.advertising}>
        <Text style={styles.advertising__text}>Advertising</Text>
      </View>
    );
  }
}

export default Advertising;
