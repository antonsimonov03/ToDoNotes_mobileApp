import React, { Component } from "react";
import { View } from "react-native";
import { TextField } from "react-native-material-textfield";

export default function({ value, label, onChange, isSecure }) {
  return (
    <View>
      <TextField
        secureTextEntry={isSecure}
        tintColor="rgba(0, 0, 0, 1)"
        baseColor="rgba(128, 128, 128, 0.8)"
        value={value}
        labelHeight={20}
        lineWidth={1}
        activeLineWidth={1}
        label={label}
        labelTextStyle={{
          paddingLeft: 10,
          color: "#000"
        }}
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          marginBottom: 20
        }}
        onChangeText={onChange}
      />
    </View>
  );
}
