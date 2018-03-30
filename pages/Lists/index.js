import React, { Component } from "react";
import { View } from "react-native";
import {
  StackNavigator,
  DrawerNavigator,
  DrawerItems,
  SafeAreaView
} from "react-navigation";

import List from "../List";
import Main from "./Main";
import Menu from "./Menu";

const MainNavigator = StackNavigator(
  {
    Lists: {
      screen: Main,
      navigationOptions: {
        header: false,
        drawerLockMode: "locked-closed"
      }
    },
    List: {
      screen: List,
      navigationOptions: {
        header: false,
        drawerLockMode: "locked-closed"
      }
    }
  },
  {
    navigationOptions: {
      initialRouteName: "Lists"
    }
  }
);

export default DrawerNavigator(
  {
    MainStack: {
      screen: MainNavigator
    },
    Menu: {
      screen: Menu,
      navigationOptions: {
        header: false
      }
    }
  },
  {
    contentComponent: Menu,
    drawerWidth: 300
  }
);
