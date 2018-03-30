import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Item = ({ data }) => (
  <View style={styles.itemWrapper}>
    <Text style={styles.line}>-</Text>
    <View style={styles.icon}>
      <Text style={styles.iconText}>icon</Text>
    </View>
    <Text style={styles.itemName} numberOfLines={1} ellipsizeMode="tail">
      {data.name}
    </Text>
  </View>
);

export default Item;
