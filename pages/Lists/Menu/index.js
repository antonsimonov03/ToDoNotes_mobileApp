import React, { Component } from "react";
import {
  View,
  ListView,
  Image,
  Text,
  StatusBar,
  TouchableHighlight
} from "react-native";
import Icon from "react-native-fa-icons";
import { SafeAreaView, DrawerItems } from "react-navigation";
import _ from "lodash";

import styles from "./styles";

const AVATAR = require("./doge.jpg");

const TOUCHABLE_STYLES = {
  paddingTop: 15,
  paddingBottom: 15,
  paddingRight: 15,
  backgroundColor: "rgba(0,0,0,0)"
};

let routes = [
  {
    name: "Lists",
    icon: "list-ul"
  },
  {
    name: "Account",
    icon: "user-circle"
  },
  {
    name: "Info",
    icon: "info"
  },
  {
    isLogout: true,
    name: "Logout",
    icon: "sign-out"
  }
];

class Menu extends Component {
  state = {};

  navigateToPage = screen => {
    let { navigation } = this.props;

    navigation.replace(screen);
  };

  renderRoutes = () => {
    return _.map(routes.slice(0), ({ name, icon, isLogout }) => (
      <View>
        {isLogout && <View style={styles.line} />}
        <TouchableHighlight
          onPress={() => {}}
          style={TOUCHABLE_STYLES}
          underlayColor="rgb(245, 240, 244)"
          activeOpacity={0.9}
        >
          <Text
            style={{
              fontSize: 20
            }}
          >
            <View style={{ width: 30, marginRight: 10 }}>
              <Icon
                style={{ textAlign: "center", fontSize: 20, color: "#adadad" }}
                name={icon}
              />
            </View>
            {name}
          </Text>
        </TouchableHighlight>
      </View>
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.header}>
          <Image
            resizeMode="cover"
            borderRadius={45}
            style={styles.avatar}
            source={AVATAR}
          />
          <Text style={styles.header_name}>Set name</Text>
          <Text style={styles.header_phone}>+1232131313</Text>
        </View>
        <View style={styles.routes}>{this.renderRoutes()}</View>
      </View>
    );
  }
}

export default Menu;
