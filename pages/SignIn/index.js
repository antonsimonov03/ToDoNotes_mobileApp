import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import TextField from "../../components/TextField";

import styles from "./styles";

class SignIn extends Component {
  state = {};

  onChangeName = name => {
    this.setState({ name });
  };

  onChangePhone = phone => {
    this.setState({ phone });
  };

  onChangePassword = password => {
    this.setState({ password });
  };

  onClickBackBtn = () => {
    let { navigation } = this.props;

    navigation.goBack();
  };

  render() {
    let { name, phone, password } = this.state;

    return (
      <View style={styles.container}>
        <TextField
          value={name}
          label="Your Name"
          onChange={this.onChangeUsername}
        />
        <TextField value={phone} label="Phone" onChange={this.onChangePhone} />
        <TextField
          value={password}
          label="Password"
          onChange={this.onChangePassword}
          isSecure
        />
        <TouchableOpacity style={styles.signInBtn} activeOpacity={0.6}>
          <Text style={styles.signInBtnText}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={this.onClickBackBtn}
          activeOpacity={0.6}
        >
          <Text style={styles.backBtnText}>BACK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignIn;
