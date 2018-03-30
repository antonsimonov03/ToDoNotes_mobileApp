import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";

class ListItem extends Component {
  state = {};

  onPressItem = () => {
    const { data, openList } = this.props;

    openList(data);
  };

  render({ data } = this.props) {
    return (
      <TouchableOpacity
        style={styles.listItem}
        activeOpacity={0.7}
        onPress={this.onPressItem}
      >
        <Text style={{ fontSize: 24, color: "#525252" }}>
          {data.name.toUpperCase()}
        </Text>
        <Text>123</Text>
      </TouchableOpacity>
    );
  }
}

export default ListItem;
