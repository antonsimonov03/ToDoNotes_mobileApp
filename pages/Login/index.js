import React, { Component } from "react";
import Icon from "react-native-fa-icons";
import { View, Button, Text, TextInput, TouchableOpacity } from "react-native";

import TextField from "../../components/TextField";

import styles from "./styles";

class Login extends Component {
  state = {};

  onChangeUsername = username => {
    this.setState({ username });
  };

  onChangePassword = password => {
    this.setState({ password });
  };

  onClickSignIn = () => {
    let { navigation } = this.props;

    navigation.navigate("SignIn");
  };

  onClickLogIn = () => {
    let { navigation } = this.props;

    navigation.replace("Lists");
  };

  render() {
    let { username, password } = this.state;

    return (
      <View style={styles.container}>
        <TextField
          value={username}
          label="Phone or Your Name"
          onChange={this.onChangeUsername}
        />

        <TextField
          isSecure
          value={password}
          label="Password"
          onChange={this.onChangePassword}
        />

        <TouchableOpacity
          style={styles.logInBtn}
          onPress={this.onClickLogIn}
          activeOpacity={0.6}
        >
          <Text style={styles.logInBtnText}>LOG IN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.onClickSignIn}
          style={styles.signInBtn}
          activeOpacity={0.6}
        >
          <Text style={styles.signInBtnText}>Sign in</Text>
        </TouchableOpacity>

        <Text style={styles.logInHeader}>Log in With</Text>

        <View style={styles.socialView}>
          <TouchableOpacity style={styles.socialIcons} activeOpacity={0.6}>
            <Icon style={styles.socialIcon} name="twitter" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialIcons} activeOpacity={0.6}>
            <Icon style={styles.socialIcon} name="facebook-f" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialIcons} activeOpacity={0.6}>
            <Icon style={styles.socialIcon} name="google" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;
