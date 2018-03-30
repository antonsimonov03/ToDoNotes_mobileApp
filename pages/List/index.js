import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-fa-icons";
import { capitalize } from "lodash";

import Header from "../../components/Header";
import Item from "./Item";
import Search from "./Search";
import Advertising from "../../components/Advertising";

import styles from "./styles";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "",
      objects: []
    };
  }

  componentDidMount() {
    this.setState({
      objects: this.props.navigation.getParam("objects")
    });
  }

  onPressBack = () => {
    this.props.navigation.pop();
  };

  renderItems = ({ objects, filter } = this.state) => {
    let filtered = objects.slice(0);

    if (filter) {
      filtered = objects.filter(item => item.name === filter);
    }

    return filtered.map(item => <Item data={item} />);
  };

  render({ navigation: { getParam } } = this.props) {
    return (
      <View style={styles.container}>
        <Header>
          <Icon
            name="chevron-left"
            style={styles.header__icon}
            onPress={this.onPressBack}
          />
          <Text style={styles.header__text}>
            {capitalize(getParam("name"))}
          </Text>
        </Header>
        <View style={styles.body}>
          <TouchableOpacity activeOpacity={0.6} style={styles.locationView}>
            <View style={styles.locationBtn}>
              <Icon name="map-marker" style={styles.locationIcon} />
            </View>
            <Text style={styles.locationText}>Location</Text>
          </TouchableOpacity>
          <Search />
          <View style={styles.listItems}>{this.renderItems()}</View>
        </View>
        <Advertising />
      </View>
    );
  }
}

export default List;
