/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { Platform, StyleSheet, Text, View } from "react-native";

import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Lists from "./pages/Lists";

export default StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: false
      }
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        gesturesEnabled: false,
        header: false
      }
    },
    Lists: {
      screen: Lists,
      navigationOptions: {
        gesturesEnabled: false,
        header: false
      }
    }
  },
  {
    initialRouteName: "Login"
  }
);
